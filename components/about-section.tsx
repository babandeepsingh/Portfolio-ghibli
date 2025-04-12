"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';


const AboutSection = () => {
    // const dates: any= new Date(Date.now())
    const dob: number = Math.abs(new Date().getTime() - new Date("06/25/1993").getTime());
    const age: number = Math.floor(dob / (1000 * 60 * 60 * 24 * 365));  // Convert milliseconds to years

    const experience: number = Math.abs(new Date().getTime() - new Date("09/01/2016").getTime());
    const experienceAge: number = Math.floor(experience / (1000 * 60 * 60 * 24 * 365));  // Convert milliseconds to years
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8">
            <h2 className="text-xl text-primary font-medium">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold">My Journey</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mt-4" />
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
            My name is Babandeep Singh I'm a {age} year old Front End Engineer based in India ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
            </p>
            <p>
            Aside from my job, I like to create and contribute to open source projects, create side projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects.
            </p>
            <p>
            n my free time you can find me longboarding 🛹 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences around India and Asia 🗺
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center ">
              <div className="text-4xl font-bold text-primary mb-2">{experienceAge}+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;