import React from "react";
import { FaCode, FaServer, FaTools, FaBrain, FaReact } from "react-icons/fa";

function Skills() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-blue-400 text-3xl" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
      color: "from-blue-500 to-blue-700",
    },
    {
      category: "Programming Languages",
      icon: <FaCode className="text-blue-400 text-3xl" />,
      skills: ["C", "C++", "JavaScript", "SQL", "Python(Basic)"],
      color: "from-blue-500 to-blue-700",
    },
    {
      category: "Backend Development (Learning)",
      icon: <FaServer className="text-purple-400 text-3xl" />,
      skills: ["Node.js", "Express", "MongoDB"],
      color: "from-purple-500 to-purple-700",
    },
    {
      category: "Tools & Platforms",
      icon: <FaTools className="text-green-400 text-3xl" />,
      skills: ["Git/GitHub", "VS Code", "Jira", "Trello"],
      color: "from-green-500 to-green-700",
    },
    {
      category: "Problem Solving",
      icon: <FaBrain className="text-yellow-400 text-3xl" />,
      skills: ["LeetCode", "Hackerrank : 3*", "GFG"],
      color: "from-yellow-500 to-yellow-700",
    },
    {
      category: "Libraries & Frameworks",
      icon: <FaReact className="text-indigo-400 text-3xl" />,
      skills: ["React", "Swiper.js", "Locomotive Scroll"],
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  return (
    <section
      className="py-16 bg-cover bg-center min-h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('/assets/newback.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center animate-fade-in">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >

              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {skill.skills.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 bg-gradient-to-r ${skill.color} text-white text-sm rounded-full`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full`}
                  style={{ width: `${skill.category.includes("Learning") ? 40 : 80}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-12 text-center text-white">
          <p className="text-lg">
            Continuously learning and expanding my skill set. Open to new technologies and challenges!
          </p>
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

export default Skills;