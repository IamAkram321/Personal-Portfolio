import React from "react";
import { useNavigate } from "react-router-dom"; 

function Home() {
  const navigate = useNavigate(); 


  const handleExploreClick = () => {
    navigate("/projects"); 
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden dark:bg-gray-900" 
      style={{ backgroundImage: "url('/assets/newback.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="absolute inset-0 z-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center px-4 relative z-10">

        <div className="relative mb-8">
          <img
            src="/assets/profile.jpg"
            alt="Md Akram"
            className="w-50 h-50 rounded-full mx-auto object-cover border-4 border-white/30 dark:border-gray-700/30 shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent animate-pulse"></div>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-white dark:text-gray-100 mb-4 animate-fade-in">
          Md Akram
        </h1>
        <p className="text-xl md:text-xl font-medium text-blue-200 dark:text-blue-300 mb-6 animate-fade-in-delay">
          Web Developer | Problem Solver | Building User-Friendly Applications
        </p>

        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="https://www.linkedin.com/in/mdakram123"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white dark:text-gray-200 text-xl bg-blue-600/20 p-3 rounded-full hover:bg-blue-600/40 transition-all duration-300 transform hover:scale-110"
          >
            <span className="w-6 h-6 flex items-center justify-center">in</span>
            <span className="hidden group-hover:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/IamAkram321"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white dark:text-gray-200 text-xl bg-gray-800/20 p-3 rounded-full hover:bg-gray-800/40 transition-all duration-300 transform hover:scale-110"
          >
            <span className="w-6 h-6 flex items-center justify-center">GH</span>
            <span className="hidden group-hover:inline">GitHub</span>
          </a>
          <a
            href="https://leetcode.com/u/IamAkram321/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white dark:text-gray-200 text-xl bg-yellow-600/20 p-3 rounded-full hover:bg-yellow-600/40 transition-all duration-300 transform hover:scale-110"
          >
            <span className="w-6 h-6 flex items-center justify-center">LC</span>
            <span className="hidden group-hover:inline">LeetCode</span>
          </a>
        </div>

        
        <div className="mt-10">
          <button
            onClick={handleExploreClick}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:text-gray-100 px-4 py-2 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Explore My Work
          </button>
        </div>
      </div>


      <style jsx>{`
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }
        .particle:nth-child(1) {
          width: 20px;
          height: 20px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          width: 15px;
          height: 15px;
          top: 60%;
          left: 30%;
          animation-delay: 2s;
        }
        .particle:nth-child(3) {
          width: 25px;
          height: 25px;
          top: 40%;
          left: 70%;
          animation-delay: 1s;
        }
        .particle:nth-child(4) {
          width: 10px;
          height: 10px;
          top: 80%;
          left: 90%;
          animation-delay: 3s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0);
            opacity: 0.8;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1.2s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}

export default Home;