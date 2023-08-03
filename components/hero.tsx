import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="hero min-h-screen bg-base-100"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <motion.h1 className="text-5xl font-bold" variants={item}>
            prinke<span className="text-primary">.dev</span>
          </motion.h1>
          <motion.h2 className="text-3xl py-2" variants={item}>
            Full Stack Developer & Software Engineer
          </motion.h2>
          <motion.p className="py-6 text-xl" variants={item}>
            With a wealth of experience in Full Stack Web Development, I have
            honed my skills in a variety of technologies including JavaScript,
            React, and Node.js. My background in Java has led me to create
            engaging Minecraft plugins, while my knowledge of C++ has been
            applied to Unreal Engine development and more. I am committed to
            crafting efficient and effective solutions, whether I&apos;m working
            on the front-end, back-end, or with game development.
          </motion.p>
          <motion.div variants={item}>
            <Link href="/projects">
              <button className="btn btn-primary">View My Projects</button>
            </Link>
            <a onClick={() => window.location.href = "/contact"}>
              <button className="btn ml-5">Get in Touch</button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
