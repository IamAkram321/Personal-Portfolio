import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // Path to your resume file
    link.download = 'resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gray-900">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50 animate-fade-out">
            <div className="cube-loader">
              <div className="cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
              </div>
              <div className="particle-glow p1"></div>
              <div className="particle-glow p2"></div>
              <div className="particle-glow p3"></div>
              <div className="particle-glow p4"></div>
            </div>
            <p className="absolute bottom-10 text-white text-lg font-semibold animate-pulse">
              Loading Portfolio...
            </p>
          </div>
        )}

        {!isLoading && (
          <>
            <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg z-40">
              <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 md:block">
                  <div className="pyramid-loader">
                    <div className="wrapper">
                      <span className="side side1"></span>
                      <span className="side side2"></span>
                      <span className="side side3"></span>
                      <span className="side side4"></span>
                      <span className="shadow"></span>
                    </div>
                  </div>
                </div>

                <ul className="hidden md:flex justify-center space-x-6">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `text-white text-lg px-4 py-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"
                              : "hover:bg-white/20 hover:shadow-md"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleDownloadResume}
                      className="text-white text-lg px-4 py-1 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-md cursor-pointer"
                    >
                      Download Resume
                    </button>
                  </li>
                </ul>

                <div className="flex items-center gap-4">
                  <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </div>
              </div>

              {isMenuOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-lg px-4 py-6 animate-slide-in">
                  <ul className="flex flex-col items-center space-y-4">
                    {navItems.map((item) => (
                      <li key={item.path} className="w-full">
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `text-white text-lg px-4 py-2 rounded-full transition-all duration-300 w-full text-center ${
                              isActive
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"
                                : "hover:bg-white/20 hover:shadow-md"
                            }`
                          }
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                    <li className="w-full">
                      <button
                        onClick={() => {
                          handleDownloadResume();
                          setIsMenuOpen(false);
                        }}
                        className="text-white text-lg px-4 py-2 rounded-full transition-all duration-300 w-full text-center hover:bg-white/20 hover:shadow-md"
                      >
                        Download Resume
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </nav>

            <div className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out 1.5s forwards;
        }

        .cube-loader {
          position: relative;
          width: 100px;
          height: 100px;
          perspective: 1000px;
        }
        .cube {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotateCube 4s infinite linear;
        }
        @keyframes rotateCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        .face {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #00ffcc, #ff00cc, #3333ff);
          opacity: 0.8;
          border: 2px solid #ffffff33;
        }
        .front { transform: translateZ(50px); }
        .back { transform: rotateY(180deg) translateZ(50px); }
        .right { transform: rotateY(90deg) translateZ(50px); }
        .left { transform: rotateY(-90deg) translateZ(50px); }
        .top { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }

        .particle-glow {
          position: absolute;
          background: radial-gradient(circle, #ffffff, transparent);
          border-radius: 50%;
          animation: glowFloat 3s infinite ease-in-out;
        }
        .p1 { width: 20px; height: 20px; top: 10%; left: 20%; animation-delay: 0s; }
        .p2 { width: 15px; height: 15px; top: 70%; left: 30%; animation-delay: 1s; }
        .p3 { width: 25px; height: 25px; top: 40%; left: 80%; animation-delay: 0.5s; }
        .p4 { width: 10px; height: 10px; top: 90%; left: 60%; animation-delay: 1.5s; }
        @keyframes glowFloat {
          0% { transform: translate(0, 0); opacity: 0.8; }
          50% { transform: translate(10px, -10px); opacity: 0.3; }
          100% { transform: translate(0, 0); opacity: 0.8; }
        }

        .pyramid-loader {
          position: relative;
          width: 60px;
          height: 60px;
          display: block;
          transform-style: preserve-3d;
          transform: rotateX(-20deg);
        }
        .wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotateY(360deg); }
        }
        .pyramid-loader .wrapper .side {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transform-origin: center top;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .pyramid-loader .wrapper .side1 {
          transform: rotateZ(-30deg) rotateY(90deg);
          background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
        }
        .pyramid-loader .wrapper .side2 {
          transform: rotateZ(30deg) rotateY(90deg);
          background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
        }
        .pyramid-loader .wrapper .side3 {
          transform: rotateX(30deg);
          background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
        }
        .pyramid-loader .wrapper .side4 {
          transform: rotateX(-30deg);
          background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
        }
        .pyramid-loader .wrapper .shadow {
          width: 25px;
          height: 25px;
          background: #8b5ad5;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transform: rotateX(90deg) translateZ(-20px);
          filter: blur(6px);
        }
      `}</style>
    </Router>
  );
}

export default App;