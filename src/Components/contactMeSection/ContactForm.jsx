import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k8536aj", // replace with your EmailJS service ID
        "template_qna4wud", // replace with your EmailJS template ID
        form.current,
        {
          publicKey: "xpanEglOTAdZWpr3w", // replace with your EmailJS public key
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
    <div className="max-w-lg mx-auto p-4 rounded-lg shadow-md bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Contact Me
      </h2>
      {success && (
        <p className="text-center mb-4 font-medium text-green-600 dark:text-green-400">
          {success}
        </p>
      )}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-white dark:bg-gray-800 px-3 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-white dark:bg-gray-800 px-3 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="rounded-lg bg-white dark:bg-gray-800 p-3 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="h-12 rounded-lg bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
