// components/Skills.js
const Skills = () => {
    const skills = [
      'React JS',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'JavaScript',
      'Node JS',
      'Express JS',
      'MongoDB',
      'Firebase',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ];
  
    return (
      <section id="skills" className="text-center py-16">
        <h2 className="text-4xl mb-4 border-b-4 border-primary pb-5 max-w-36 mx-auto uppercase text-primary">Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
              <span className="text-primary font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;
  