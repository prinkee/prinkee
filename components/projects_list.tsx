import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "./project_card";

export default function ProjectsList() {

  return (
    <>
      {/* rows of 3 daisyui */}
      <div className="container mx-auto mt-16 mb-48">
        <h1 className="text-5xl font-bold mt-16 mb-16">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            img="crowned_bg.png"
            imgAlt="Crowned Games Background Art"
            title="Crowned Games"
            description="Video game company"
            link="https://www.crowned.games"
            linkText="Visit Website"
            disclaimerText=""
            blank={true}
          />
          <ProjectCard
            img="spigot_bg.jpg"
            imgAlt="A Minecraft Render by @RealMineAPI the @TheFlawedx"
            title="Spigot Plugins"
            description=""
            link="#plugins"
            linkText="View Plugin List"
            disclaimerText="Render & Map by @RealMineAPI & @TheFlawedX"
            blank={false}
          />
          <ProjectCard
            img="riko_bg.png"
            imgAlt="RikoAI Background Art"
            title="RikoAI"
            description="AI Discord Bot"
            link="https://github.com/prinkee/discord-chatbot"
            linkText="View GitHub Repo"
            disclaimerText="Discontinued"
            blank={true}
          />
          <ProjectCard
            img="dochi_bg.png"
            imgAlt="Dochi Background Art"
            title="Dochi"
            link="#"
            linkText=""
            description="Multipurpose Discord Bot"
            disclaimerText="Private"
            blank={false}
          />
        </div>

        <h1 className="text-5xl font-bold mt-48 mb-16" id="plugins">
          Spigot Plugins
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            img="pm+_bg.png"
            imgAlt="PM+ Art"
            title="PM+"
            link="https://www.spigotmc.org/resources/pm-an-advanced-messaging-plugin.101818/"
            linkText="View Spigot Page"
            description="Spigot private messaging plugin"
            disclaimerText=""
            blank={true}
          />
          <ProjectCard
            img="spectate_bg.png"
            imgAlt="Spectate Addon Art"
            title="Spectate Addon"
            link="https://www.spigotmc.org/resources/mbedwars-spectate-addon.101340/"
            linkText="View Spigot Page"
            description="An addon plugin for Marcely's Bedwars"
            disclaimerText=""
            blank={true}
          />
          <ProjectCard
            img="lobby_bg.png"
            imgAlt="Lobby Command"
            title="Lobby Command"
            link="https://www.spigotmc.org/resources/lobbycommand.97717/"
            linkText="View Spigot Page"
            description="A simple command to switch servers using bungee"
            disclaimerText=""
            blank={true}
          />
          <ProjectCard
            img="duels_bg.png"
            imgAlt="Duels"
            title="Duels"
            link="https://github.com/prinketaru/duels"
            linkText="View GitHub Repo"
            description="A custom duels plugin for a private SMP"
            disclaimerText=""
            blank={true}
          />
          <ProjectCard
            img="sunessentials.png"
            imgAlt="SunEssentials"
            title="SunEssentials"
            link="https://youtu.be/7rhPVSMQPw4"
            linkText="View Demo Video"
            description="A custom essentials plugin for a private SMP"
            disclaimerText=""
            blank={true}
          />
        </div>
      </div>
    </>
  );
}
