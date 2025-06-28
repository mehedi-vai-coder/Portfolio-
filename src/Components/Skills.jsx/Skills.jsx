// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
    <section
        id="skills"
        className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
    >
        {/* Background Glow Circles */}
        {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div> */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-ping z-0"></div>

        {/* Section Title */}
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                SKILLS
            </h2>
            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-medium">
                A collection of my technical skills and expertise honed through projects and collaborations.
            </p>
        </div>

        {/* Skill Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SkillsInfo.map((category) => (
                <Tilt
                    key={category.title}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={800}
                    gyroscope={true}
                >
                    <div className="bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-700/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(130,69,236,0.2)] backdrop-blur-md hover:shadow-[0_0_60px_rgba(130,69,236,0.3)] transition duration-500">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center justify-center bg-[#1f2937]/50 border border-purple-700/20 hover:border-purple-500/50 rounded-xl p-3 transition duration-300"
                                >
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="w-10 h-10 sm:w-12 sm:h-12"
                                    />
                                    <span className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Tilt>
            ))}
        </div>
    </section>
);

export default Skills;
