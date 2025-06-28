// src/components/Education/Education.jsx

import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Education = () => {
    return (
        <section
            id="education"
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
                    EDUCATION
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-medium">
                    My education has been a journey of learning and development across institutions and experiences.
                </p>
            </div>

            {/* Education Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                    <Tilt
                        key={edu.id}
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
                                        src={edu.img}
                                        alt={edu.school}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-purple-300">{edu.school}</p>
                                    <p className="text-xs text-gray-400">{edu.date}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {edu.desc}
                            </p>

                            {/* Grade */}
                            {edu.grade && (
                                <p className="text-purple-300 font-medium">
                                    Grade: {edu.grade}
                                </p>
                            )}
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Education;
