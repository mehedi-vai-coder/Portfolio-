// src/components/Contact/ContactForm.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_k8536aj",
                "template_qna4wud",
                form.current,
                {
                    publicKey: "xpanEglOTAdZWpr3w",
                }
            )
            .then(
                () => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSuccess("✅ Message Sent Successfully!");
                    setTimeout(() => setSuccess(""), 4000);
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    setSuccess("❌ Failed to send message. Please try again.");
                    setTimeout(() => setSuccess(""), 4000);
                }
            );
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
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-700/40 rounded-2xl p-6 sm:p-10 shadow-[0_0_40px_rgba(130,69,236,0.15)] backdrop-blur-md hover:shadow-[0_0_60px_rgba(130,69,236,0.3)] transition duration-500 max-w-2xl mx-auto"
                >
                    {success && (
                        <p className="text-center mb-4 font-medium text-green-500">
                            {success}
                        </p>
                    )}
                    <div className="flex flex-col gap-5">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-12 rounded-lg bg-[#0f172a]/50 border border-purple-700/20 text-gray-200 placeholder-gray-500 px-4 focus:outline-none focus:border-purple-500 transition"
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 rounded-lg bg-[#0f172a]/50 border border-purple-700/20 text-gray-200 placeholder-gray-500 px-4 focus:outline-none focus:border-purple-500 transition"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message..."
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="rounded-lg bg-[#0f172a]/50 border border-purple-700/20 text-gray-200 placeholder-gray-500 p-4 focus:outline-none focus:border-purple-500 transition"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full font-bold text-white text-lg transition duration-300 transform hover:scale-105"
                            style={{
                                // background: "linear-gradient(90deg, #8245ec, #a855f7)",
                                boxShadow:
                                    "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                            }}
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </motion.form>
            </Tilt>
        </section>
    );
};

export default ContactForm;
