import React from "react";

function About() {
  return (
    <section className="py-16 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-3xl font-bold mb-12 text-white text-center animate-fade-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <p className="text-lg text-white text-justify leading-relaxed">
              I am a motivated Software Development Engineer passionate about building scalable and efficient web applications. I enjoy solving complex problems, learning new technologies, and delivering high-quality software that makes a real impact.
            </p>
            <p className="mt-4 text-white text-justify leading-relaxed">
              Beyond coding, I love exploring tech trends, contributing to projects that challenge my skills, and continually improving my knowledge to stay ahead in the ever-evolving software industry.
            </p>
            <blockquote className="mt-6 border-l-4 border-blue-400 pl-4 italic text-blue-200">
              "Clean, efficient, and well-structured code is the foundation of reliable software. I strive to write code that’s not only functional but also maintainable and scalable."
            </blockquote>

            {/* Quick Facts */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-white">
              <div>
                <span className="font-semibold text-blue-300">Focus:</span> Full Stack & Software Development
              </div>
              <div>
                <span className="font-semibold text-blue-300">Skills:</span> JavaScript, React, Node.js, Python
              </div>
              <div>
                <span className="font-semibold text-blue-300">Hobbies:</span> Problem Solving, Tech, Reading
              </div>
              <div>
                <span className="font-semibold text-blue-300">Goal:</span> Build Impactful Software
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
