
const Contact = () => {
    return (
      <section id="contact" className="text-center py-16 px-4">
        <div className="">
        <h2 className="text-4xl mb-4 border-b-4 border-primary pb-5 max-w-44 mx-auto uppercase text-primary ">Contact</h2>
        <form className="max-w-2xl mx-auto space-y-4 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-left mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-left mb-1" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="example@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-left mb-1" htmlFor="message">Your message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your message here"
              rows="5"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="py-2 px-4 bg-primary text-white rounded hover:bg-secondary hover:text-primary transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  