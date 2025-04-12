"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
// import profilePic from '../public/me.png'

const HeroSection = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left side content - full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 bg-background flex items-center order-2 lg:order-1 px-6 py-12 lg:py-0">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl text-primary font-medium">Full Stack Developer</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">Babandeep Singh</span>
            </h1>
          </div>
          
          {/* <p className="text-xl text-muted-foreground leading-relaxed">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating intuitive and responsive applications that solve real-world problems.
          </p> */}
          
          <div className="flex items-center gap-4 pt-4">
            <Button className="gap-2 px-6 py-6 text-base rounded-full">
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, 'projects')}
              >
                View Projects
              </a> 
              <ArrowRight size={18} />
            </Button>
            <div className="flex items-center gap-3">
              <a href="https://github.com/babandeepsingh" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
                  <Github size={22} />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/babandeep/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
                  <Linkedin size={22} />
                </Button>
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
                  <Twitter size={22} />
                </Button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side image - 50% width on desktop, full height on mobile */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen order-1 lg:order-2 relative">
        <Image 
          src="/me.png" 
          alt="Babandeep Singh" 
          fill
          priority
          className="object-cover"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Specify sizes for different screen widths
        />
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <a 
          href="#about" 
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 15 6-6 6 6" /></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;