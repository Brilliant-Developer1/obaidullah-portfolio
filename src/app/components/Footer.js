"use client"
import { Facebook, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { FaHackerrank } from "react-icons/fa";
import Link from 'next/link';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <section className="bg-gray-100">
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="flex flex-wrap justify-center gap-4 uppercase">
    
    <ScrollLink to="home" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">About</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">Skills</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
        <ScrollLink to="education" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">Education</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
    <ScrollLink to="contact" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">Contact</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
    <ScrollLink to="projects" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">Projects</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
  </nav> 
  <nav className="flex flex-wrap justify-center gap-4 mb-4">
      <Link href="mailto:email2obaidul@gmail.com" target="_blank" rel="noopener noreferrer">
        <Mail className="hover:text-primary transition-colors duration-300" title="Email" />
      </Link>
      <Link href="https://github.com/Brilliant-Developer1" target="_blank" rel="noopener noreferrer">
        <Github className="hover:text-primary transition-colors duration-300" title="GitHub" />
      </Link>
      <Link href="https://www.linkedin.com/in/md-obaidullah-brilliant-developer" target="_blank" rel="noopener noreferrer">
        <Linkedin className="hover:text-primary transition-colors duration-300" title="LinkedIn" />
      </Link>
      <Link href="https://www.facebook.com/abidh18" target="_blank" rel="noopener noreferrer">
        <Facebook className="hover:text-primary transition-colors duration-300" title="Facebook" />
      </Link>
      <Link href="https://codeforces.com/profile/Md_Obaidullah" target="_blank" rel="noopener noreferrer">
        <SiCodeforces className="hover:text-primary transition-colors duration-300 text-xl" title="Codeforces" />
      </Link>
      <Link href="https://leetcode.com/u/email2obaidul/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode className="hover:text-primary transition-colors duration-300 text-xl" title="LeetCode" />
      </Link>
    </nav>
  <aside>
    <p>Copyright © 2024 - All right reserved by Brilliant Developer</p>
  </aside>
</footer>
    </section>
  )
}

export default Footer