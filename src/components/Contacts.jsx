import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await axios.post("/api/contact", formData);
      setSubmitStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-16 bg-gray-100 bg-cover bg-center min-h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('/assets/newback.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white text-center animate-fade-in">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:shadow-lg"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            
            {submitStatus && (
              <p className={`text-center ${submitStatus.includes("success") ? "text-green-300" : "text-red-300"}`}>
                {submitStatus}
              </p>
            )}
          </form>


          <div className="text-white space-y-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">📧</span> 
                  <a href="mailto:akramshahjada786@gmail.com" className="hover:text-blue-400 transition">
                  akramshahjada786@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">📍</span> 
                  Coimbatore,Tamil Nadu
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.linkedin.com/in/akramshahjada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-xl text-white hover:text-blue-400 transition duration-300"
              >
                <span className="bg-blue-600 p-2 rounded-full">in</span> LinkedIn
              </a>
              <a 
                href="https://github.com/IamAkram321" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-xl text-white hover:text-gray-300 transition duration-300"
              >
                <span className="bg-gray-800 p-2 rounded-full">GH</span> GitHub
              </a>
              <a 
                href="https://leetcode.com/u/IamAkram321/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-xl text-white hover:text-yellow-400 transition duration-300"
              >
                <span className="bg-yellow-600 p-2 rounded-full">LC</span> LeetCode
              </a>
            </div>
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

export default Contact;