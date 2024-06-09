"use client";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMaterializecss } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { Github, Globe, Mail, Server } from 'lucide-react';
import { PiFramerLogo } from "react-icons/pi";
import { BsBootstrap } from "react-icons/bs";
import { SiReactrouter } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import Link from "next/link";
import { Tooltip } from 'react-tooltip';

const ProjectsCard = ({ project }) => {
  const renderTechStack = (tech) => {
    const techDetails = {
      "React JS": <FaReact className="text-primary text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="React JS" />,
      "Next.js": <SiNextdotjs className="text-primary text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Next.js" />,
      "Tailwind CSS": <RiTailwindCssFill className="text-blue-400 text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Tailwind CSS" />,
      "Firebase": <IoLogoFirebase className="text-yellow-400 text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Firebase" />,
      "Material UI": <DiMaterializecss className="text-primary text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Material UI" />,
      "Express JS": <SiExpress className="text-primary text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Express JS" />,
      "MongoDB": <SiMongodb className="text-green-600 text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="MongoDB" />,
      "Framer Motion": <PiFramerLogo className="text-primary text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Framer Motion" />,
      "Bootstrap": <BsBootstrap className="text-blue-400 text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Bootstrap" />,
      "Reactrouter": <SiReactrouter className="text-primary text-3xl" data-tooltip-id="tech-tooltip" data-tooltip-content="React Router" />,
      "EmailJS": <Mail className="text-orange-400" data-tooltip-id="tech-tooltip" data-tooltip-content="EmailJS" />,
      "Vite": <SiVite className="text-primary text-2xl" data-tooltip-id="tech-tooltip" data-tooltip-content="Vite" />,
      "API": <AiOutlineApi className="text-primary text-2xl" data-tooltip-id="tech-tooltip" data-tooltip-content="API" />
    };

    return techDetails[tech] || <span className="text-primary">{tech}</span>;
  };

  return (
    <div className="max-w-sm bg-white overflow-hidden">
      <div className="relative group">
        <img
          src={project.imageUrl}
          alt="project"
          className="h-full min-h-[282px] w-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />
        <img
          src={project.imageUrl2}
          alt="project-hover"
          className="h-full min-h-[282px] w-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl pb-6 border-b border-primary mb-2">{project.title}</h3>
        <p className="text-gray-700 my-8">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            {project.techStack.map((tech, index) => (
              <span key={index}>{renderTechStack(tech)}</span>
            ))}
          </div>
          <div className="flex space-x-4">
            <Link
              target="_blank"
              href={project.githubLinkClient}
              className="text-primary hover:text-primary"
              data-tooltip-id="github"
              data-tooltip-content="Github"
            >
              <Github />
            </Link>
            {project.githubLinkServer && (
              <Link
                target="_blank"
                href={project.githubLinkServer}
                className="text-primary hover:text-primary"
                data-tooltip-id="server"
                data-tooltip-content="Server"
              >
                <Server />
              </Link>
            )}
            <Link
              target="_blank"
              href={project.liveLink}
              className="text-primary hover:text-primary"
              data-tooltip-id="website"
              data-tooltip-content="Website"
            >
              <Globe />
            </Link>
          </div>
        </div>
      </div>
      <Tooltip id="tech-tooltip" />
      <Tooltip id="github" place="bottom-end" />
      <Tooltip id="server" place="bottom-end" />
      <Tooltip id="website" place="bottom-end" />
    </div>
  );
};

export default ProjectsCard;
