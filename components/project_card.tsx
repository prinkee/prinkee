import Link from "next/link";

interface ProjectCardProps {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  disclaimerText: string;
  blank?: boolean;
}

export default function ProjectCard({
  img,
  imgAlt,
  title,
  description,
  link,
  linkText,
  disclaimerText,
  blank,
}: ProjectCardProps) {
  return (
    <>
      {/* card start */}
      <Link href={link} {...(blank ? { target: "_blank" } : {})}>
        <div className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out project-card">
          <figure>
            <img src={img} alt={imgAlt}></img>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">{title}</h2>
            <p className="text-lg">{description}</p>
            <p></p>
            <div className="disclaimer-text">
              <p className="text-xs">{disclaimerText}</p>
            </div>
            {linkText && (
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{linkText}</button>
              </div>
            )}
          </div>
        </div>
      </Link>
      {/* card end */}
    </>
  );
}
