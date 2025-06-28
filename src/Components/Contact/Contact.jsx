import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // integrate EmailJS, Formspree, or server API here
    };

    return (
        <section
            id="contact"
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
                    CONTACT
                </h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-medium">
                    Feel free to reach out for collaborations, projects, or any inquiries.
                </p>
            </div>

            {/* Contact Form */}
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={700}
                gyroscope={true}
                className="relative z-10"
            >
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-700/40 rounded-2xl p-6 sm:p-10 shadow-[0_0_40px_rgba(130,69,236,0.15)] backdrop-blur-md hover:shadow-[0_0_60px_rgba(130,69,236,0.3)] transition duration-500 max-w-2xl mx-auto"
                >
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-[#0f172a]/50 border border-purple-700/20 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-[#0f172a]/50 border border-purple-700/20 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-[#0f172a]/50 border border-purple-700/20 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                            placeholder="Your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full font-bold text-white text-lg transition duration-300 transform hover:scale-105"
                        style={{
                            background: "linear-gradient(90deg, #8245ec, #a855f7)",
                            // boxShadow:
                            //     "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                        }}
                    >
                        SEND MESSAGE
                    </button>
                </motion.form>
            </Tilt>
        </section>
    );
};

export default Contact;
