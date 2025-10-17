import React from "react";

function Projects() {
  const projects = [
    {
      title: "Fraud Detection System",
      description:
        "A machine learning-based web application that predicts fraudulent transactions using supervised learning models. Built with Streamlit for interactive UI, it allows users to input transaction data and instantly receive fraud predictions. The project includes data preprocessing, feature engineering, model training (using scikit-learn), and evaluation metrics for accuracy and precision tracking.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"],
      image: "/assets/fraud.png",
    },

    {
      title: "WatchTogether (Ongoing)",
      description: "A collaborative web application that allows multiple users to watch YouTube videos in sync while chatting in real time. Users can create or join rooms, share video links, and control playback (play, pause, seek) seamlessly across all participants.The project demonstrates real-time communication, state synchronization, and interactive UI design.",
      tech: ["Rect", "Socket.IO", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/assets/watch1.png",
    },
    {
      title: "Collaborative Real-Time Code Editor",
      description: "Built a real-time collaborative code editor enabling multiple users to write and edit code simultaneously. Integrated Socket.IO for live synchronization, added syntax highlighting, and ensured smooth collaboration with scalable backend support. Deployed on Vercel for accessibility.",
      tech: ["Next.js", "Socket.IO", "Express.js", "Tailwind CSS", "Vercel"],
      image: "/assets/codesyncss.png",
      link: "https://github.com/IamAkram321/Code-Editor"

    },
    {
      title: "SaarthiAI",
      description: "Developed a ChatGPT-like AI chat bot using Next.js and Assistant UI, integrated with Gemini API for conversational capabilities. Designed a responsive UI with Tailwind CSS and deployedon Vercel for scalability",
      tech: ["NextJS", "Assistant UI", "Tailwind CSS", "Gemini API", "Vercel"],
      image: "/assets/bot.png",
      link: "https://saarthi-ai-drab.vercel.app/"
    },
    {
      title: "AI Agent Chatbot",
      description: "Built an AI chatbot with MCP server, integrating Gemini for conversations and X API for social posting.Enabled real-time tool execution (e.g., math, posts) via Server-Sent Events.Deployed locally with Git, mastering API authentication and responsive design.",
      tech: ["JavaScript", "Express", "Gemini API", "X API"],
      image: "/assets/agent.webp"
    },
    {
      title: "Huffman Compressor",
      description: "Developed a web-based text compression tool using Huffman Coding in C++, compiled to WebAssembly with Emscripten. Designed an interactive UI with HTML, CSS, and JavaScript, achieving up to 69% size reduction (e.g., md akram from 64 bits to 20 bits). Hosted live on GitHub Pages with a clean, professional design.",
      link: "https://iamakram321.github.io/Huffman-Compressor/",
      tech: ["C++", "WebAssembly", "HTML", "CSS", "JavaScript"],
      image: "/assets/compressor.png"
    },
    {
      title: "Get Your Works Done",
      description: "This is a sleek and interactive To-Do App built using React + Vite, styled with Tailwind CSS, and enhanced with smooth scrolling effects using Locomotive Scroll. It offers a user-friendly interface for managing daily tasks efficiently.",
      link: "https://innomatics-assignment5.vercel.app/",
      tech: ["HTML", "TailwindCSS", "JavaScript", "React"],
      image: "/assets/todo.png"
    },
    {
      title: "Innomatics Research Labs",
      description: "A responsive web app that replicates the official Innomatics website. This project helped enhance my front-end skills, focusing on responsive design and a user-friendly interface.",
      link: "https://iamakram321.github.io/Innomatics-Research-Labs-Recreated/",
      tech: ["HTML", "CSS", "JavaScript", "SwiperJS", "Locomotive Scroll"],
      image: "/assets/innomatics.png"
    },
    {
      title: "Memory Matching Game",
      description: "A JavaScript-based interactive game. This project showcases my ability to create dynamic and engaging user experiences.",
      link: "https://iamakram321.github.io/Match-Your-Memory/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/memory.png"
    },
    {
      title: "Random Quotes Generator",
      description: "This Random Quote Generator is a simple yet powerful web app built using HTML, CSS, and JavaScript, featuring voice integration for an interactive experience. With a click, it generates inspiring quotes and reads them aloud!",
      link: "https://iamakram321.github.io/Random-Quote-Generator/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/random.png"
    },
    {
      title: "Bubble Game",
      description: "An interactive bubble game built with JavaScript. This project enhanced my skills in creating dynamic gameplay mechanics.",
      link: "https://iamakram321.github.io/Bubble-Game/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/bubble.png"
    },
    {
      title: "Sundown Website",
      description: "A project focused on responsive web design, CSS animations, and modern web practices to create a clean, minimalistic website.",
      link: "https://iamakram321.github.io/Sundown-Website/",
      tech: ["HTML", "CSS", "JavaScript", "SwiperJS", "Locomotive Scroll"],
      image: "/assets/sundown.png"
    }
  ];

  return (
    <section
      className="py-16 min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h3 className="text-3xl md:text-3xl font-extrabold text-white mb-12 text-center animate-fade-in">
          My Projects
        </h3>

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