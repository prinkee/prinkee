import React from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import ParticlesOverlay from "../components/particles";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>prinke.dev - Full Stack Developer & Software Engineer</title>
        <meta name="description" content="Showcasing my journey and achievements as a Full Stack Developer. Explore my projects, skills, and get in touch for collaborations and job opportunities." />
        <meta name="keywords" content="Full Stack Developer, Software Engineer, Projects, Skills, Collaborations, Job Opportunities" />
        <meta name="author" content="prinke" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
        <ParticlesOverlay />
        <div>
          <Navbar />
          <Hero />
          <Footer />
        </div>
    </>
  );
}
