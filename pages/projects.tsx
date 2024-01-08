import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectsList from "@/components/projects_list";
import Head from "next/head";

const Projects = () => {
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
        <meta property="image" content="/favicon.png" />
        <meta name="author" content="prinke" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
    <div>
      <div className="max-w-[90%] mx-auto">
        <Navbar />
        <div className="flex justify-center items-center">
          <ProjectsList />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Projects;
