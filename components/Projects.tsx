import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Motivio",
    description:
      "Motivio is a Little Prince themed motivational quote generator which fetches data from Quotable API and allows users to copy their favourite quotes.",
    image: "/Motivio.png",
    github: "https://github.com/yifeiw701/quote-generator",
    link: "https://quote-generator-chi-amber.vercel.app/",
  },
  {
    name: "Yifei's Portfolio",
    description:
      "Yep, I built this fully responsive personal portfolio with an emphasis on UX design.",
    image: "/portfolio.png",
    github: "https://github.com/yifeiw701/portfolio-app",
    link: "https://yifei-portfolio.vercel.app/",
  },
  {
    name: "Recipe App",
    description:
      "Recipe Recommendation App is a website that I built in Streamlit which used BeautifulSoup to do web scraping to suggest recipes based on ingredients a user has.",
    image: "/Recipe.png",
    github: "https://github.com/yifeiw701/Recipe-Recommendation",
    link: "https://recipe-recommendation-sv06.onrender.com/",
  },
];

const ProjectsSection = () => {
  return (
      <section id="projects">
        <h1 className="my-10 text-center uppercase tracking-[20px] text-gray-500 text-xl md:text-3xl mb-15">
          Projects
        </h1>
  
        <div className="flex flex-col space-y-28 md:pb-48 mx-auto">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 text-sm">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-200">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 text-neutral-900 dark:text-neutral-200">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default ProjectsSection;