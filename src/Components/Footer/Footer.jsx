import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    // Smooth scroll function
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="py-10 px-[7vw] lg:px-[20vw] bg-[#0a0716] text-white font-sans">
            <div className="container mx-auto text-center">
                {/* Name / Logo */}
                <h2
                    className="text-2xl font-extrabold mb-4 cursor-pointer select-none"
                    style={{
                        background:
                            "linear-gradient(90deg, #8245ec, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        // 
                    }}
                    onClick={() => handleScroll("about")}
                    title="Back to top"
                >
                    Mehedi Hasan
                </h2>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 mb-6">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Experience", id: "experience" },
                        { name: "Projects", id: "projects" },
                        { name: "Education", id: "education" },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="text-sm sm:text-base text-gray-300 hover:text-purple-500 transition-colors duration-300 font-medium"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-8 text-2xl sm:text-3xl mb-6">
                    {[
                        {
                            icon: <FaFacebook />,
                            link: "https://www.facebook.com/md.mehedihasan0008/",
                            label: "Facebook",
                        },
                        {
                            icon: <FaTwitter />,
                            link: "https://x.com/MDMehedi2027",
                            label: "Twitter",
                        },
                        {
                            icon: <FaLinkedin />,
                            link: "https://www.linkedin.com/in/md-mehedi-hasan-61a3a81a3/4",
                            label: "LinkedIn",
                        },
                        {
                            icon: <FaInstagram />,
                            link: "https://www.instagram.com/mehedi_hasan_02_bd/?hl=en",
                            label: "Instagram",
                        },
                        {
                            icon: <FaYoutube />,
                            link: "https://www.youtube.com/@DebugEnglish2.0",
                            label: "YouTube",
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="text-gray-400 hover:text-purple-500
                         transition-transform transform hover:scale-125
                         hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]
                         duration-300"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright Text */}
                <p className="text-sm text-gray-500 select-none">
                    © 2025 Mehedi Hasan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
