import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../../assets/company_logo/Profile1.png'
import Tilt from 'react-parallax-tilt';


const About = () => {
    return (
        <section id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Mehedi Hasan
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                2000,
                                'App Developer',
                                2000,
                                'React Developer',
                                2000,
                                'Coder',
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                            style={{ color: '#8245ec', display: 'inline-block' }}
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am a full-stack developer with over 2 years of experience in
                        building scalable web applications. Skilled in both front-end and
                        back-end development, I specialize in the MERN stack and other
                        modern technologies to create seamless user experiences and
                        efficient solutions.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1nnq9S7j94TrYyE0SjMktK2dOtePabNlE/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>
                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full"
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1200}
                        scale={1.08}
                        transitionSpeed={500}
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        glareColor="#8245ec"
                        glarePosition="all"
                        gyroscope={true}
                        style={{
                            borderRadius: "9999px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(130, 69, 236, 0.4)",
                        }}
                    >
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;