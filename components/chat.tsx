"use client";

import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
// import "./styles.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, assistantMessage]);

    try {
      abortControllerRef.current = new AbortController();

      const transformedMessages = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        parts: [{ type: "text", text: msg.content }],
      }));

      const response = await fetch("https://chat.babandeep.in/api/chat", {
      // const response = await fetch("http://localhost:3000/api/chat", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: transformedMessages }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("No reader available");

      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: accumulatedContent }
              : msg
          )
        );
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Error:", error);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: "Sorry, an error occurred." }
              : msg
          )
        );
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{zIndex:'2'}}
          className="fixed bottom-6 right-6 chat-button text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl transition"
        >
          💬
        </button>
      )}

      {/* Chat Sidebar */}
      <div
      style={{zIndex:'2'}}
        className={`chat-transition fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0e0e10] text-white flex flex-col shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="py-4 px-5 border-b border-gray-800 bg-[#121212] flex justify-between items-center">
          <h1 className="text-xl font-bold">Babandeep’s AI 🤖</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white text-xl font-bold"
          >
            ✖
          </button>
        </header>

        {/* Chat Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin-custom"
        >
          {messages.length === 0 ? (
            <p className="text-center text-gray-400 mt-20 text-sm">
              Ask me anything to get started ✨
            </p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow 
                  ${
                    message.role === "user"
                      ? "user-message rounded-br-none"
                      : "bg-[#1f1f22] rounded-bl-none border border-gray-700"
                  }`}
                >
                  <span className="block font-semibold mb-1">
                    {message.role === "user" ? "You" : "Babandeep"}
                  </span>
                  <div className="whitespace-pre-wrap">
                    {message.role === "user" ? (
                      message.content
                    ) : (
                      <Markdown>{message.content}</Markdown>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1f1f22] text-gray-400 px-4 py-3 rounded-2xl rounded-bl-none shadow text-sm animate-pulse">
                Babandeep is thinking... 🤔
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-[#121212] px-4 py-3">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
              className="flex-1 px-4 py-2 rounded-full bg-[#1f1f22] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="chat-button text-white px-4 py-2 rounded-full transition disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </footer>
      </div>
    </>
  );
}
