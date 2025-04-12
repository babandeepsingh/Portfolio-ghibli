"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lead software Engineer, Axtria",
      description: ["led team of engineers in developing new features for web platform, prioritizing code quality and performance. Also facilitated requirement gathering, design discussions, and architectural decisions." ,
      "Worked extensively with Next.js to build fast, high-performance web applications and created npm packages using Rollup to develop modular UI components."
,
"Built responsive user interfaces with React, utilizing hooks, functional components, and Redux for state management to ensure scalability and performance. Additionally"
,"Drive performance improvements, user experience enhancements, and seamless cross-team collaboration, contributing to the platform's overall success."],
    tags: ["Next.js", "Node.js", "React.js", "Tailwind CSS", "Redux"],
    },
    {
      title: "Software Developer, NTT Ltd.",
      description: ["Implementation of web applications using React, Angular, NodeJS.", "Worked on REST / Web APIs to test them on Postman and used in React/Angular HTTP service calls and update the UI based on the response from the HTTP calls.", "Worked with CSS3, Angular Material, PrimeNG, Flex Box to develop Responsive Web Pages.", "Developed a common framework using interactive command line project taking React, Angular , Next JS and Vue repo project as base and adding custom CSS, installing Routes, etc for easy access for new projects"],
      tags: ["Node.js", "React.js", "CSS", "Redux"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Sr. Software Developer, Coforge(NIIT TECH.)",
      description: ["Developed a dynamic website with accessibility norms from scratch.", "Guided and followed best practices around accessibility and semantic UI/UX", "Configured the CI/CD pipeline for AWS Amplify", "Used Node JS, Express server as middleware to cached data, hide API key. Implemented express rate limit, express slow down for few routes with response size above certain limit.", "Actively helped manage, estimate and scope out the project."],
      tags: ["Node.js", "React.js", "CSS", "Redux", "Angular"],
      liveLink: "#",
      githubLink: "#"
    }
    ,
    {
      title: "Programmer Analyst, Cognizant Technology Solutions",
      description: ["Migrated and managed website from jquery to Angular 2.", "Took an active role in development of Single Page Application.", "Migrated Angular app from Angular 2 to Angular 6.", "Used RXJS and NGRX for data operation and state management respectively.", "Added concepts like Lazy Loading for performance betterment."],
      tags: ["Node.js", "React.js", "CSS", "Redux", "Angular", "NGRX", "RXJS"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-xl text-primary font-medium">Career</h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">Work Experience</h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative space-y-4">
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                {/* <p className="text-muted-foreground"></p> */}
                {project.description.map((desc, i)=><p key={i} className='text-muted-foreground'>{desc}</p>)}
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;