// src/components/Work/Work.jsx
import React, { useState } from "react";
import { projects } from "../../constants";
import Tilt from "react-parallax-tilt";

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    return (
        <section
            id="work"
            className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
        >
            {/* Background Blur Circles */}
            {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div> */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-ping z-0"></div>

            {/* Section Title */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                    PROJECTS
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-medium">
                    A showcase of the projects I've built, reflecting clean design and scalable architecture.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Tilt
                        key={project.id}
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        perspective={1000}
                        scale={1.04}
                        transitionSpeed={800}
                        gyroscope={true}
                    >
                        <div
                            onClick={() => handleOpenModal(project)}
                            className="cursor-pointer bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-700/30 rounded-2xl shadow-[0_0_30px_rgba(130,69,236,0.15)] overflow-hidden hover:shadow-[0_0_50px_rgba(130,69,236,0.25)] hover:-translate-y-2 transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover rounded-t-2xl"
                            />
                            <div className="p-5">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-purple-900/30 border border-purple-700 text-purple-300 text-xs rounded-full px-2 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-700/30 rounded-2xl shadow-2xl max-w-3xl w-[95%] overflow-hidden">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-400 transition"
                        >
                            &times;
                        </button>

                        <div className="flex flex-col p-6 lg:p-8">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="rounded-xl shadow-lg mb-6 object-contain w-full max-h-[400px]"
                            />
                            <h3 className="text-3xl font-bold text-white mb-4">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-300 mb-4">
                                {selectedProject.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-purple-900/30 border border-purple-700 text-purple-300 text-xs rounded-full px-2 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center bg-gray-800 hover:bg-purple-700 text-gray-300 hover:text-white py-2 rounded-xl font-semibold transition"
                                >
                                    View Code
                                </a>
                                <a
                                    href={selectedProject.webapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center bg-[#8245ec] hover:bg-purple-800 text-white py-2 rounded-xl font-semibold transition"
                                >
                                    View Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Work;
