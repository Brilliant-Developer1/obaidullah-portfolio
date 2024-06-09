"use client"
import { Facebook, Github, Linkedin } from 'lucide-react'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <section className="bg-gray-100">
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4 uppercase">
    
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
  <nav className="grid grid-flow-col gap-4 mb-4">
          <a href="https://github.com/Brilliant-Developer1" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-primary transition-colors duration-300" />
          </a>
          <a href="www.linkedin.com/in/md-obaidullah-brilliant-developer" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-primary transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com/abidh18" target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-primary transition-colors duration-300" />
          </a>
        </nav>
  <aside>
    <p>Copyright © 2024 - All right reserved by Brilliant Developer</p>
  </aside>
</footer>
    </section>
  )
}

export default Footer