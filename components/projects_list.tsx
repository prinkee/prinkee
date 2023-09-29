import React from "react";
import {
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";

export default function ProjectsList() {
  return (
    <>
      <div className="flex flex-col mt-32 mb-32 max-w-[90%] md:max-w-4xl m-auto justify-center items-center">
        <div className="stats stats-vertical md:stats-horizontal shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-white">
              <FaJsSquare className="inline-block w-8 h-8 text-yellow-300" />
            </div>
            <div className="stat-title text-white opacity-40">JavaScript</div>
            <div className="stat-value text-white">2 years</div>
            <div className="stat-desc text-white opacity-40">since 2021</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaJava className="inline-block w-8 h-8 text-orange-500" />
            </div>
            <div className="stat-title text-white opacity-40">Java</div>
            <div className="stat-value text-white">3 years</div>
            <div className="stat-desc text-white opacity-40">since 2020</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaHtml5 className="inline-block w-8 h-8 text-orange-600" />
            </div>
            <div className="stat-title text-white opacity-40">HTML5</div>
            <div className="stat-value text-white">5 years</div>
            <div className="stat-desc text-white opacity-40">since 2018</div>
          </div>
        </div>

        <div className="flex gap-2">
          <img src="/cpp.png" className="h-6 mt-5" draggable={false} />
          <img src="/ts.png" className="h-6 mt-5" draggable={false} />
          <FaReact className="inline-block w-6 h-6 text-blue-500 mt-5" />
          <FaCss3Alt className="inline-block w-6 h-6 text-blue-300 mt-5" />
          <img src="/tailwindcss.png" className="h-6 mt-5" draggable={false} />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-10 mt-10">My Projects</h1>
        </div>
        <div className="card w-full bg-base-200">
          <div className="card-body">
            <div className="flex flex-row">
              <img
                src="/crowned_logo.png"
                className="h-16 mr-5"
                draggable={false}
              />
              <div className="flex flex-col">
                <h2 className="card-title text-4xl font-bold">Crowned Games</h2>
                <h2 className="text-2xl">Video Game Company</h2>
              </div>
            </div>
            <p className="text-lg">
              Crowned Games is a passionate, independent video game development
              company dedicated to creating imaginative and thought-provoking
              experiences. Born out of a deep love for gaming and innovative
              storytelling, our small but dedicated team believes in the magic
              of video games as a powerful medium of art, adventure, and
              connection.
            </p>
            <div className="card-actions">
              <a href="https://www.crowned.games" target="_blank">
                <button className="btn btn-primary">Visit Website</button>
              </a>
              <button className="btn btn-link">More Info</button>
            </div>
          </div>
        </div>
        <div className="card mt-5 w-full bg-base-200">
          <div className="card-body">
            <div className="flex flex-row">
              <img
                src="/rikoai_logo.png"
                className="h-16 mr-5"
                draggable={false}
              />
              <div className="flex flex-col">
                <h2 className="card-title text-4xl font-bold">RikoAI</h2>
                <h2 className="text-2xl">Discord Bot</h2>
              </div>
            </div>
            <p className="text-lg">
              RikoAI was a public Discord bot designed to bring human-like
              conversational abilities to Discord servers, leveraging the power
              of OpenAI's GPT-3.5. The bot was equipped with features such as
              channel management, customizable personalities, and admin
              controls, aiming to provide a more interactive and engaging
              experience for users. While the project has been discontinued to
              focus on more ambitious endeavors, the source code has been
              open-sourced and is available on GitHub for educational purposes
              and further development by the community.
            </p>
            <div className="card-actions">
              <button className="btn btn-link p-0">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
