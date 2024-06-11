"use client"
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
    return (
      <section id="home" style={{ backgroundImage: `url(https://i.ibb.co/3WCvQT3/DALL-E-2024-06-11-12-20-11-A-clean-and-modern-hero-section-for-a-web-developer-portfolio-website-The.webp)` }} className="relative text-center py-16  h-screen bg-cover bg-center flex   justify-center sm:justify-normal">
        <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="max-w-sm ml-0 sm:ml-10">
            <div className="relative z-10 flex flex-col items-center  p-2 text-white">
                <h2 className="text-4xl mb-4 border-b-4 border-white pb-5 max-w-xl text-center uppercase ">Md Obaidullah</h2>
                <p className="max-w-xl mx-auto my-8 ">
                    Junior web developer specialized in Front-End.<br /> 
                    With expertise in React JS | Next.js | Tailwind CSS. Building user-friendly and responsive web applications.
                </p>
            </div>
        <div className="relative z-10 space-x-4">
        <ScrollLink to="projects" smooth={true} className="inline-block">
          <button className="py-2 px-4 border border-white text-white rounded hover:bg-secondary hover:text-primary transition-colors duration-300">
            Projects
          </button>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} className="inline-block">
          <button className="py-2 px-4 bg-primary text-white rounded hover:bg-secondary hover:text-primary transition-colors duration-300">
            Contact
          </button>
        </ScrollLink>
      </div>
            </div>
      </section>
    );
  }
  
  export default Hero;
  