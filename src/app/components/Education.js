// components/Education.js
const Education = () => {
    return (
        <section id="education" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-4 border-b-4 border-primary pb-5 max-w-52 mx-auto uppercase text-primary">Education</h2>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-medium">Northern University Bangladesh</h3>
              <p className="text-lg italic">Dhaka — Bachelor in Textile Engineering</p>
              <p className="mt-2">Sep 2017 - May 2020</p>
              <p>Passing Year: 2020</p>
              <p>Result: 2.794</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-medium">Model Institute of Science and Technology (MIST)</h3>
              <p className="text-lg italic">Gazipur — Diploma in Textile Engineering</p>
              <p className="mt-2">Passing Year: 2017</p>
              <p>Result: 3.04</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  