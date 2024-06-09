"use client";

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow sticky top-0 w-full z-10">
      <h1 className="text-2xl font-semibold text-primary">WEB DEVELOPER</h1>
      <nav className="hidden md:flex space-x-4 uppercase">
        <ScrollLink to="home" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">Home</span>
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
        <ScrollLink to="about" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">About</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} className="relative group cursor-pointer">
          <span className="hover:text-primary">Projects</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </ScrollLink>
        <Link href="https://drive.google.com/file/d/1rJvhqtdq0iBdYjYeAvUF0PxrW9gLjNmi/view?usp=sharing" target="_blank" className="relative group cursor-pointer">
          <span className="hover:text-primary">Resume</span>
          
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <ScrollLink to="contact" smooth={true} className="relative group cursor-pointer">
          <span className="py-2 px-4 bg-primary text-white rounded hover:bg-secondary hover:text-primary transition-colors duration-300">Contact</span>
          
        </ScrollLink>
      </nav>
      <button className="md:hidden text-primary focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4 px-8">
            <ScrollLink to="home" smooth={true} className="relative group cursor-pointer" onClick={() => setMenuOpen(false)}>
              <span className="hover:text-primary">Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} className="relative group cursor-pointer" onClick={() => setMenuOpen(false)}>
              <span className="hover:text-primary">About</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} className="relative group cursor-pointer" onClick={() => setMenuOpen(false)}>
              <span className="hover:text-primary">Projects</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} className="relative group cursor-pointer" onClick={() => setMenuOpen(false)}>
              <span className="py-2 px-4 bg-primary text-white rounded hover:bg-secondary hover:text-primary transition-colors duration-300">Contact</span>
            </ScrollLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
