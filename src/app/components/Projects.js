import { projects } from '../db';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section id="projects" className="py-16">
            <div className="flex flex-col items-center p-2">
                <h2 className="text-4xl text-primary mb-4 border-b-4 border-primary pb-5 max-w-xl text-center">Projects</h2>
                <div className="flex flex-wrap gap-8 justify-center mt-10">
                    {projects.map((project, index) => (
                        <ProjectsCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
