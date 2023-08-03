import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    name: "Crowned Games",
    description: "Video Game Company",
    img: "/crowned_bg.png",
    longDescription:
      "Crowned Games is an innovative video game company that I founded, with a focus on creating immersive story-based games. Utilizing the robust capabilities of the Unreal Engine, we are able to craft compelling narratives set within richly detailed, interactive environments. Each game is a product of our dedication to high-quality graphics, captivating storytelling, and engaging gameplay. Our mission at Crowned Games is to provide players with memorable gaming experiences that resonate on a personal level, and to continually push the boundaries of what is possible within the realm of interactive storytelling.",
    website: "https://crowned.games",
    socials: {
      discord: "https://discord.gg/ujb3ExkWa5",
      twitter: "https://twitter.com/crowned_games",
    },
  },
  {
    name: "Spigot Plugins",
    img: "/spigot_bg.jpg",
    longDescription:
      "Throughout my development career, I've authored a variety of plugins for the Spigot platform. These encompass a wide range of functionalities, from intuitive messaging systems to comprehensive administration tools and quality-of-life improvements. Each plugin has been meticulously designed to enhance the Minecraft server experience, providing server owners with increased control and customization, while ensuring players enjoy a smooth and engaging gameplay experience. My Spigot plugins demonstrate my commitment to creating efficient, user-friendly solutions that meet the diverse needs of the Minecraft community.",
    socials: {
      "spigot profile":
        "https://www.spigotmc.org/members/prinke.333972/#resources",
      "mineapi (image rendering)": "https://twitter.com/realmineapi",
      "theflawed (image map)": "https://twitter.com/theflawedx",
    },
  },
  {
    name: "RikoAI",
    description: "Discord Bot (Open Source)",
    img: "/riko_bg.png",
    longDescription:
      "RikoAI was an AI chatbot for Discord, now discontinued and open-sourced. Leveraging the advanced natural language processing capabilities of OpenAI, RikoAI offered a highly engaging and responsive chat experience to users.",
    socials: {
      "github (coming soon)": "https://github.com/prinkee/rikoai",
      "demo video": "https://youtu.be/Gj5kJZq3qYU",
    },
    images: ["/riko_prev.png", "/riko_prev2.png", "/riko_prev3.png"],
  },
  {
    name: "Dochi",
    description: "Discord Bot (Private)",
    img: "/dochi.png",
    longDescription:
      "Dochi is a versatile, multi-purpose Discord bot currently under private development. Designed with user engagement and server management in mind, Dochi encompasses a wide range of functionalities, from moderation tools to utility commands, and even fun features to foster interaction and entertainment within the community.",
  },
];

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(null);

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
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>prinke.dev - Projects</title>
        <meta
          name="description"
          content="Showcasing my journey and achievements as a Full Stack Developer. Explore my projects, skills, and get in touch for collaborations and job opportunities."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Software Engineer, Projects, Skills, Collaborations, Job Opportunities"
        />
        <meta name="author" content="prinke" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <motion.div
        className="min-h-screen bg-base-100 py-10 text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="text-center"></div>
        <motion.div
          className="carousel w-full h-[80vh] mt-20"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              id={`slide${index + 1}`}
              key={index}
              className="carousel-item relative w-full h-full flex items-center justify-center"
              variants={item}
            >
              <div
                className="relative w-3/4 h-full mx-auto rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex flex-col items-center justify-center p-10">
                  <h2 className="text-6xl text-center font-bold text-primary mb-5">
                    {project.name}
                  </h2>
                  <p className="text-2xl text-center mb-5">
                    {project.description}
                  </p>
                  <label
                    htmlFor={`my_modal_${index}`}
                    className="btn btn-primary btn-wide"
                  >
                    View More
                  </label>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${index === 0 ? projects.length : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index + 2 > projects.length ? 1 : index + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {projects.map((project, index) => (
          <>
            <input
              type="checkbox"
              id={`my_modal_${index}`}
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box">
                <h2 className="text-4xl font-bold mb-4">{project.name}</h2>
                <p>{project.longDescription}</p>
                <div className="space-x-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-primary mt-4">Website</button>
                    </a>
                  )}
                  {project.socials &&
                    Object.entries(project.socials).map(([key, value]) => (
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        <button key={key} className="btn btn-primary mt-2">
                          {key}
                        </button>
                      </a>
                    ))}
                </div>
                {project.images && project.images.length > 0 ? (
                  project.images.map((image, i) => (
                    <a href={`./${image}`} target="_blank">
                      <Image
                        key={i}
                        src={image}
                        alt={project.name}
                        className="mt-4 w-full h-auto object-cover rounded"
                        layout="responsive"
                        width={500}
                        height={300}
                      />
                    </a>
                  ))
                ) : (
                  <p className="mt-4">No images available for this project.</p>
                )}
                <label className="btn mt-4" htmlFor={`my_modal_${index}`}>
                  Close
                </label>
              </div>
              <label
                className="modal-backdrop"
                htmlFor={`my_modal_${index}`}
              ></label>
            </div>
          </>
        ))}
      </motion.div>
      <Footer />
    </>
  );
}
