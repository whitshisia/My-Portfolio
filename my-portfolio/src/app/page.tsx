"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Whitney Shisia", "Software Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const projects = [
    { name: "Project Alpha", description: "A powerful backend API for managing user authentication." },
    { name: "Project Beta", description: "A scalable microservices architecture for e-commerce platforms." },
    { name: "Project Gamma", description: "A cloud-based database optimization tool for high-load systems." },
  ];

  return (
    <div className="min-h-screen bg-[#134B42] text-white flex flex-col items-center p-8">
      {/* Header */}
      <nav className="w-full flex justify-center space-x-8 text-lg font-semibold">
        {['About', 'Projects', 'Contact'].map((section) => (
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
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8">
        <Image 
          src="/profile.jpg" 
          alt="Whitney Shisia" 
          width={180} 
          height={180} 
          className="rounded-full border-4 border-[#CA763A]"
        />
        <motion.div>
          <motion.h1
            className="text-5xl font-bold text-[#CA763A]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            key={roleIndex}
          >
            {roles[roleIndex]}
          </motion.h1>
          <motion.p className="mt-4 text-lg max-w-lg text-center md:text-left">
            Passionate software developer specializing in backend development, database management, and scalable system architectures.
          </motion.p>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 mt-6">
        <Link href="https://linkedin.com" target="_blank">
          <FaLinkedin className="text-3xl text-[#CA763A] hover:text-white transition" />
        </Link>
        <Link href="https://github.com" target="_blank">
          <FaGithub className="text-3xl text-[#CA763A] hover:text-white transition" />
        </Link>
      </div>

{/* Projects Section */}
<div id="projects" className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="relative w-72 h-48 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="relative w-full h-full bg-white text-black p-6 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 group">
        <h3 className="text-xl font-semibold text-center group-hover:hidden">{project.name}</h3>
        <p className="text-sm text-center hidden group-hover:block">{project.description}</p>
      </div>
    </motion.div>
  ))}
</div>

      {/* Contact Section */}
      <div id="contact" className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-[#CA763A]">Get in Touch</h2>
        <p className="mt-2">Email: shisiawhitney215@gmail.com</p>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-400">&copy; 2025 Whitney Shisia. All rights reserved.</footer>
    </div>
  );
}
