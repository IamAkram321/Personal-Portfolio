import React from "react";

function Projects() {
  const projects = [
    {
      title: "Get Your Works Done",
      description: "A responsive web app that replicates the official Innomatics website. This project helped enhance my front-end skills, focusing on responsive design and a user-friendly interface.",
      link: "https://innomatics-assignment5.vercel.app/",
      tech: ["HTML", "Tailwindcss", "JavaScript","React"],
      image: "public/assets/todo.png"
    },
    {
      title: "Innomatics Website Clone",
      description: "A responsive web app that replicates the official Innomatics website. This project helped enhance my front-end skills, focusing on responsive design and a user-friendly interface.",
      link: "https://iamakram321.github.io/innomaticsInternshipProject1/",
      tech: ["HTML", "CSS", "JavaScript","SwiperJS","Locomotive Scroll"],
      image: "public/assets/innomatics.png"
    },
    {
      title: "Memory Matching Game",
      description: "A JavaScript-based interactive game. This project showcases my ability to create dynamic and engaging user experiences.",
      link: "https://iamakram321.github.io/InnomaticsInternshipProject2/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "public/assets/memory.png"
    },
    {
      title: "Random Quotes Generator",
      description: "A task to enhance styling with CSS. I focused on responsive design and CSS animations to create a visually engaging experience.",
      link: "https://iamakram321.github.io/Random-Quote-Generator/",
      tech: ["HTML", "CSS", "JavaScript","FetchAPI"],
      image: "public/assets/random.png"
    },
    {
      title: "Bubble Game",
      description: "An interactive bubble game built with JavaScript. This project enhanced my skills in creating dynamic gameplay mechanics.",
      link: "https://iamakram321.github.io/Bubble-Game/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "public/assets/bubble.png"
    },
    {
      title: "Sundown Website",
      description: "A project focused on responsive web design, CSS animations, and modern web practices to create a clean, minimalistic website.",
      link: "https://iamakram321.github.io/Sundown-Website/",
      tech: ["HTML", "CSS", "JavaScript","SwiperJS","Locomotive Scroll"],
      image: "public/assets/sundown.png"
    }
  ];

  return (
    <section 
      className="py-16 bg-cover bg-center min-h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('public/assets/newback.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 text-justify">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Check It Out
                </a>
              </div>
            </div>
          ))}
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

export default Projects;