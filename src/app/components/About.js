"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id="about" className="text-center py-16 bg-gray-100">
            <div className="flex flex-col items-center p-2">
                <h2 className="text-4xl text-primary mb-4 border-b-4 border-primary pb-5 max-w-xl text-center uppercase">About</h2>
                <p className={`max-w-xl  mx-auto my-8 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-40 overflow-hidden'}`}>
                    As a Junior Web Developer with a specialization in Front-End development, I bring a robust set of skills and expertise to the table. My proficiency spans across several key technologies and frameworks, including React JS, Next.js, Tailwind CSS, CSS, Bootstrap, and Material UI. These tools allow me to create visually appealing, responsive, and user-friendly web applications that cater to modern web standards.
                    <br />  <br />
                    My journey in web development has equipped me with a deep understanding of JavaScript, React JS, Node JS, Express JS, Mongo DB, and Firebase. This comprehensive skill set enables me to handle both front-end and back-end development tasks, ensuring seamless integration and functionality of web applications.
                    <br />  <br />
                    In addition to my technical skills, I am well-versed in design tools such as Adobe Photoshop and Illustrator. This knowledge enhances my ability to create aesthetically pleasing and cohesive designs, contributing to the overall user experience.
                    <br />  <br />
                    I am passionate about building web applications that are not only functional but also intuitive and engaging. My focus is on delivering high-quality code, adhering to best practices, and continuously improving my skills to stay abreast of the latest industry trends.
                    <br />  <br />
                    Through my work, I strive to bridge the gap between design and technology, ensuring that every project I undertake is both beautiful and performant. I am dedicated to crafting solutions that meet user needs while pushing the boundaries of what&apos;s possible in web development.
                    <br />  <br />
                    Whether working on a team or independently, I bring a positive attitude, a problem-solving mindset, and a commitment to excellence. I am eager to contribute my skills to innovative projects and to collaborate with others who share my passion for technology and design.
                </p>
                <button onClick={toggleExpansion} className="relative group">
                    <span className="hover:text-primary flex items-center">
                        {isExpanded ? 'See Less' : 'See More'}
                        {!isExpanded ? <Plus className="ml-1" /> : <Minus className="ml-1" />}
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
            </div>
        </section>
    );
}

export default About;
