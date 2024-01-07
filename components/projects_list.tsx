import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsList() {
  return (
    <>
      {/* rows of 3 daisyui */}
      <div className="container mx-auto mt-16 mb-48">
        <h1 className="text-5xl font-bold mt-48 mb-16">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* card start */}
          <Link href="https://www.crowned.games" target="_blank">
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="crowned_bg.png" alt="Crowned Games Art"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Crowned Games</h2>
                <p className="text-lg">Video game company</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}

          {/* card start */}
          <Link href="#plugins">
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="spigot_bg.jpg" alt="A Minecraft Render"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Spigot Plugins</h2>
                <p></p>
                <div className="image-credits">
                  <p className="text-xs">
                    Render & Map by:{" "}
                    <Link href="https://x.com/realmineapi" target="_blank">
                      MineAPI
                    </Link>{" "}
                    &{" "}
                    <Link href="https://x.com/theflawedx" target="_blank">
                      TheFlawed
                    </Link>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Plugin List</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}

          {/* card start */}
          <Link
            href="https://github.com/prinkee/discord-chatbot"
            target="_blank"
          >
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="riko_bg.png" alt="RikoAI Art"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">RikoAI</h2>
                <p className="text-lg">AI Discord Bot</p>
                <div className="badge badge-ghost">
                  <div>Discontinued</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View GitHub Repo</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}

          {/* card start */}
          <Link href="#">
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="dochi_bg.png" alt="Dochi Art"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Dochi</h2>
                <p className="text-lg">Multipurposes Discord Bot</p>

                <div className="card-actions justify-end">
                  <div className="badge badge-ghost">
                    <div>Private</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}
        </div>

        <h1 className="text-5xl font-bold mt-48 mb-16" id="plugins">
          Spigot Plugins
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* card start */}
          <Link
            href="https://www.spigotmc.org/resources/pm-an-advanced-messaging-plugin.101818/"
            target="_blank"
          >
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="pm+_bg.png" alt="PM+ Art"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">PM+</h2>
                <p className="text-lg">Spigot private messaging plugin</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Spigot Page</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}

          {/* card start */}
          <Link
            href="https://www.spigotmc.org/resources/mbedwars-spectate-addon.101340/"
            target="_blank"
          >
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="spectate_bg.png" alt="Spectate Addon Art"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Spectate Addon</h2>
                <p className="text-lg">An addon plugin for Marcely's Bedwars</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Spigot Page</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}

          {/* card start */}
          <Link
            href="https://www.spigotmc.org/resources/lobbycommand.97717/"
            target="_blank"
          >
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="lobby_bg.png" alt="Lobby Command"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Lobby Command</h2>
                <p className="text-lg">A simple command to switch servers using bungee</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Spigot Page</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}

          {/* card start */}
          <Link
            href="https://github.com/prinkee/duels"
            target="_blank"
          >
            <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
              <figure>
                <img src="duels_bg.png" alt="Duels"></img>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Duels</h2>
                <p className="text-lg">A custom duels plugin for a private SMP</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View GitHub Repo</button>
                </div>
              </div>
            </div>
          </Link>
          {/* card end */}
        </div>
      </div>
    </>
  );
}
