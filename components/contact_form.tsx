import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";
import Script from "next/script";
require("dotenv").config();

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const showToast = (message: string, type: string) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 5000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const formElement = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    const turnstileToken = formData.get("cf-turnstile-response") as string;

    if (!turnstileToken) {
      showToast("Please complete the captcha verification.", "error");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        showToast("Message sent successfully!", "success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      showToast("Error sending message.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async={true}
        defer={true}
      />
      <div className="flex items-center justify-center min-h-screen mt-20 lg:mt-0 text-white">
        <motion.form
          className="w-full max-w-2xl p-5 rounded-xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <h1 className="text-left text-3xl font-bold mb-5">Get in Touch</h1>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="input textarea-bordered w-full"
              id="name"
              type="text"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input textarea-bordered w-full"
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              id="message"
              placeholder="Your message..."
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div
            className="cf-turnstile checkbox"
            data-sitekey={process.env.CF_TURNSTILE_SITE_KEY}
          />
          <div className="flex items-center mt-16 justify-between">
            {isLoading ? (
              <button className="btn btn-primary no-animation">
                <span className="loading loading-spinner"></span>
                Sending
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            )}
          </div>
          {toastMessage && (
            <div className="toast toast-start toast-bottom">
              <div className={`alert alert-${toastType}`}>
                <span>{toastMessage}</span>
              </div>
            </div>
          )}
          <div className="divider">OR</div>
          <div className="mt-4 flex justify-left mt-5 space-x-4">
            <a
              href="https://twitter.com/prinkeo"
              target="_blank"
              className="w-8 text-primary"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://github.com/prinkee"
              target="_blank"
              className="w-8 text-primary"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="mailto:prince@crownedinteractive.com"
              className="w-8 text-primary"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </motion.form>
      </div>
    </>
  );
}
