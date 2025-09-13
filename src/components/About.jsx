import React from "react";

function About() {
  return (
    <section
      className="py-16 min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-3xl font-bold mb-12 text-white text-center animate-fade-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <img
                src="/assets/golo.webp"
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
            </div>
          </div>

          
          <div className="md:col-span-2 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <p className="text-lg text-white text-justify leading-relaxed">
              As a passionate Full Stack Developer with a unique blend of Civil Engineering expertise, I thrive on creating innovative and seamless web applications. My journey in tech has fueled my desire to constantly learn and push boundaries, building meaningful solutions that impact users positively. I’m deeply committed to mastering new technologies and delivering exceptional projects.
            </p>
            <p className="mt-4 text-white text-justify leading-relaxed">
              Outside of coding, you’ll often find me reading, exploring the latest in tech, and traveling to new destinations that inspire both creativity and growth.
            </p>
            <blockquote className="mt-6 border-l-4 border-blue-400 pl-4 italic text-blue-200">
              "A Developer who carefully crafts every line of code... Because if the logic isn't clean and well-structured, what else can you rely on to build something truly remarkable?"
            </blockquote>

            {/* Quick Facts */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-white">
              <div>
                <span className="font-semibold text-blue-300">Background:</span> Civil Engineering
              </div>
              <div>
                <span className="font-semibold text-blue-300">Focus:</span> Full Stack Development
              </div>
              <div>
                <span className="font-semibold text-blue-300">Hobbies:</span> Reading, Tech, Travel
              </div>
              <div>
                <span className="font-semibold text-blue-300">Goal:</span> Impactful Solutions
              </div>
            </div>

            
            <a
              href="https://www.linkedin.com/in/akramshahjada/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

export default About;