// src/components/Experience/Experience.jsx

import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
            style={{
                // background: "linear-gradient(180deg, #0b061a 0%, #140d2c 100%)",
            }}
        >
            {/* Soft pink glow bottom right */}
            {/* <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-ping z-0"></div> */}

            {/* Section Title */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                    EXPERIENCE
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-medium">
                    A collection of my work experiences and the roles I have taken in various organizations.
                </p>
            </div>

            {/* Experience Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <Tilt
                        key={exp.id}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        scale={1.04}
                        transitionSpeed={800}
                        gyroscope={true}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-700/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(130,69,236,0.15)] backdrop-blur-md hover:shadow-[0_0_60px_rgba(130,69,236,0.3)] transition duration-500"
                        >
                            {/* Header */}
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-16 h-16 rounded-xl overflow-hidden border border-purple-700/40 shadow-[0_0_15px_rgba(130,69,236,0.2)] flex-shrink-0">
                                    <img
                                        src={exp.img}
                                        alt={exp.company}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm text-purple-300">{exp.company}</p>
                                    <p className="text-xs text-gray-400">{exp.date}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {exp.desc}
                            </p>

                            {/* Skills */}
                            <div>
                                <h4 className="text-white font-medium mb-2">Skills:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#1f2937]/60 border border-purple-700/20 text-gray-300 hover:border-purple-500/50 transition duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Experience;
