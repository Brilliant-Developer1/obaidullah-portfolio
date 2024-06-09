
const Hero = () => {
    return (
      <section id="home" className="text-center py-16 mt-10">
        <div className="flex flex-col items-center p-2">
        <h2 className="text-4xl  mb-4 border-b-4 border-primary pb-5 max-w-xl text-center uppercase text-primary">Md Obaidullah</h2>
        <p className="max-w-xl mx-auto my-8 ">Junior web developer specialized in Front-End.<br/> With expertise in React JS | Next.js | Tailwind CSS. Building user friendly and responsive web applications.</p>
        </div>
        <div className="space-x-4">
        <button className="py-2 px-4 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors duration-300">
          Projects
        </button>
        <button className="py-2 px-4 bg-primary text-white rounded hover:bg-secondary hover:text-primary transition-colors duration-300">
          Contact
        </button>
      </div>
      </section>
    );
  }
  
  export default Hero;
  