import React from "react";

export default function ProjectsList() {
  return (
    <>
      <div className="flex flex-col mt-32 mb-32 max-w-[90%] md:max-w-4xl m-auto justify-center items-center">
        <div>
            <h1 className="text-5xl font-bold mb-5">My Projects</h1>
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
            <p className="text-lg">Crowned Games is a passionate, independent video game development company dedicated to creating imaginative and thought-provoking experiences. Born out of a deep love for gaming and innovative storytelling, our small but dedicated team believes in the magic of video games as a powerful medium of art, adventure, and connection.</p>
            <div className="card-actions">
              <a href="https://www.crowned.games" target="_blank"><button className="btn btn-primary">Visit Website</button></a>
              <button className="btn btn-link">More Info</button>
            </div>
          </div>
        </div>
        <div className="card mt-5 w-full bg-base-200">
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
            <p className="text-lg">Crowned Games is a passionate, independent video game development company dedicated to creating imaginative and thought-provoking experiences. Born out of a deep love for gaming and innovative storytelling, our small but dedicated team believes in the magic of video games as a powerful medium of art, adventure, and connection.</p>
            <div className="card-actions">
              <a href="https://www.crowned.games" target="_blank"><button className="btn btn-primary">Visit Website</button></a>
              <button className="btn btn-link">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
