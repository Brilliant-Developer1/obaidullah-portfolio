import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMaterializecss } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { Github, Mail, Server } from 'lucide-react';
import { PiFramerLogo } from "react-icons/pi";
import { BsBootstrap } from "react-icons/bs";
import { SiReactrouter } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import Link from "next/link";


const ProjectsCard = ({ project }) => {
  const renderTechStack = (tech) => {
    switch (tech) {
      case "React JS":
        return <FaReact className="text-primary text-3xl" />;
      case "Next.js":
        return <SiNextdotjs className="text-primary text-3xl" />;
      case "Tailwind CSS":
        return <RiTailwindCssFill className="text-blue-400 text-3xl" />;
      case "Firebase":
        return <IoLogoFirebase className="text-yellow-400 text-3xl" />;
      case "Material UI":
        return <DiMaterializecss className="text-primary text-3xl" />;
      case "Express JS":
        return <SiExpress className="text-primary text-3xl" />;
      case "MongoDB":
        return <SiMongodb className="text-green-600 text-3xl" />;
      case "Framer Motion":
        return <PiFramerLogo className="text-primary text-3xl" />;
      case "Bootstrap":
        return <BsBootstrap className="text-blue-400 text-3xl" />;
      case "Reactrouter":
        return <SiReactrouter className="text-primary text-3xl" />;  
      case "EmailJS":
        return <Mail className="text-orange-400"/>;  
      case "Vite":
        return <SiVite className="text-primary text-2xl"/>;  
      case "API":
        return <AiOutlineApi className="text-primary text-2xl"/>;  
      
      default:
        return <span PiFramerLogo="text-primary">{tech}</span>;
    }
  };

  return (
    <div className="max-w-sm bg-white  overflow-hidden">
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
        <h3 className="text-xl pb-6 border-b border-primary  mb-2">{project.title}</h3>
        <p className="text-gray-700 my-8">{project.description}</p>

        <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          {project.techStack.map((tech, index) => (
            <span key={index}>{renderTechStack(tech)}</span>
          ))}
        </div>
        <div className="flex space-x-4  ">
          <Link
          target="_blank"
            href={project.githubLinkClient}
            className="text-primary hover:text-primary"
          >
             <Github />
          </Link>
          {project.githubLinkServer && (
            <Link
            target="_blank"
              href={project.githubLinkServer}
              className="text-primary hover:text-primary"
            >
              <Server />
            </Link>
          )}
          <Link
          target="_blank"
            href={project.liveLink}
            className="text-primary hover:text-primary"
          >
            <TbWorldWww className="text-primary text-3xl"/>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
