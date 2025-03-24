"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Whitney Shisia", "Software Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const projects = [
    { 
      name: "PARCEL DELIVERY", 
      description: "A system to streamline product deliveries.",
      skills: ["Python", "React"],
      tools: ["Postman", "Git", "VS Code"],
      image: "/delivery.jpg"
    },
    { 
      name: "TANOSHI WEBSITE", 
      description: "Company showcase website with services.",
      skills: ["React", "Tailwind CSS"],
      tools: ["Figma", "GitHub", "Netlify"],
      image: "/website.jpg"
    },
    { 
      name: "BABY MONITORING", 
      description: "Track baby growth and daily activities.",
      skills: ["Flutter", "Firebase"],
      tools: ["Google API","Firebase"],
      image: "/baby.jpg"
    },
  ];

  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Flask", "PHP-LARAVEL", "Python", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
    { category: "DevOps", items: ["Docker", "AWS"] },
  ];

  return (
    <div className="min-h-screen bg-[#134B42] text-white flex flex-col items-center p-4 md:p-8">
      {/* Header */}
      <nav className="w-full flex justify-center space-x-6 md:space-x-8 text-base md:text-lg font-semibold">
        {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
          <Link
            key={section}
            href={`#${section.toLowerCase()}`}
            className="relative group text-[#CA763A] hover:text-white transition"
          >
            {section}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#CA763A] scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="about" className="w-full max-w-4xl py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Image 
            src="/profile.jpg" 
            alt="Whitney Shisia" 
            width={150} 
            height={150} 
            className="rounded-full border-4 border-[#CA763A]"
            priority
          />
          <motion.div className="text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-[#CA763A]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              key={roleIndex}
            >
              {roles[roleIndex]}
            </motion.h1>
            <motion.p className="mt-3 md:mt-4 text-base md:text-lg max-w-md">
              Passionate software developer specializing in backend development, database management, and scalable system architectures.
            </motion.p>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6 ">
          <Link href="https://www.linkedin.com/in/whitneyshisia215/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl md:text-3xl text-[#CA763A] hover:text-white transition" />
          </Link>
          <Link href="https://github.com/whitshisia" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl md:text-3xl text-[#CA763A] hover:text-white transition" />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#CA763A] mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#CA763A] mb-3">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[#CA763A] rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#CA763A] mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-32 relative">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-black">
                <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                
                <div className="mb-2">
                  <h4 className="text-xs font-semibold text-[#CA763A]">SKILLS:</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="bg-[#134B42] text-white px-2 py-0.5 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-[#CA763A]">TOOLS:</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="bg-[#CA763A] text-white px-2 py-0.5 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl py-8 md:py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#CA763A] mb-3">Get in Touch</h2>
        <p className="text-base md:text-lg mb-3">I am currently open to new opportunities and collaborations.</p>
        <p className="text-base md:text-lg">
          Email me at: <a href="mailto:shisiawhitney215@gmail.com" className="text-[#CA763A] hover:underline">shisiawhitney215@gmail.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Whitney Shisia. All rights reserved.
      </footer>
    </div>
  );
}