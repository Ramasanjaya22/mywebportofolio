import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Reddo : Gamify Reading Tracker",
    description:
      "Motivio is a Little Prince themed motivational quote generator which fetches data from Quotable API and allows users to copy their favourite quotes.",
    image: "/Motivio.png",
    github: "https://github.com/yifeiw701/quote-generator",
    link: "https://quote-generator-chi-amber.vercel.app/",
  },
  {
    name: "Rama Portfolio",
    description:
      "Yep, I built this fully responsive personal portfolio with an emphasis on UX design.",
    image: "/portfolio.png",
    github: "https://github.com/yifeiw701/portfolio-app",
    link: "https://yifei-portfolio.vercel.app/",
  },
  {
    name: "Cheva Webdev member Gallery Porto",
    description:
      "Recipe Recommendation App is a website that I built in Streamlit which used BeautifulSoup to do web scraping to suggest recipes based on ingredients a user has.",
    image: "/Recipe.png",
    github: "https://github.com/yifeiw701/Recipe-Recommendation",
    link: "https://recipe-recommendation-sv06.onrender.com/",
  },
  {
    name: "FitTrack: Tracking Minum dan Tidur",
    description:
      "Recipe Recommendation App is a website that I built in Streamlit which used BeautifulSoup to do web scraping to suggest recipes based on ingredients a user has.",
    image: "/Recipe.png",
    github: "https://github.com/yifeiw701/Recipe-Recommendation",
    link: "https://recipe-recommendation-sv06.onrender.com/",
  },
  {
    name: "Reddo : Gamify Reading Tracker",
    description:
      "Motivio is a Little Prince themed motivational quote generator which fetches data from Quotable API and allows users to copy their favourite quotes.",
    image: "/Motivio.png",
    github: "https://github.com/yifeiw701/quote-generator",
    link: "https://quote-generator-chi-amber.vercel.app/",
  },
  {
    name: "Rama Portfolio",
    description:
      "Yep, I built this fully responsive personal portfolio with an emphasis on UX design.",
    image: "/portfolio.png",
    github: "https://github.com/yifeiw701/portfolio-app",
    link: "https://yifei-portfolio.vercel.app/",
  },
  {
    name: "Cheva Webdev member Gallery Porto",
    description:
      "Recipe Recommendation App is a website that I built in Streamlit which used BeautifulSoup to do web scraping to suggest recipes based on ingredients a user has.",
    image: "/Recipe.png",
    github: "https://github.com/yifeiw701/Recipe-Recommendation",
    link: "https://recipe-recommendation-sv06.onrender.com/",
  },
  {
    name: "FitTrack: Tracking Minum dan Tidur",
    description:
      "Recipe Recommendation App is a website that I built in Streamlit which used BeautifulSoup to do web scraping to suggest recipes based on ingredients a user has.",
    image: "/Recipe.png",
    github: "https://github.com/yifeiw701/Recipe-Recommendation",
    link: "https://recipe-recommendation-sv06.onrender.com/",
  },
];

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="my-10 text-center uppercase tracking-[20px] text-gray-500 text-xl md:text-3xl">
      Projects
    </h1>
  
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col animate-slideUpCubiBezier animation-delay-2 text-sm mx-6">
          <Link href={project.link}>
            <Image
              src={project.image}
              alt=""
              width={1000}
              height={1000}
              className="rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
            />
          </Link>
          <div className="mt-8">
            <h1 className="text-xl font-bold mb-6 text-neutral-900 dark:text-neutral-200">
              {project.name}
            </h1>
            <p className="text-md leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
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
      ))}
    </div>
  </div>
  
    );
};

export default ProjectsSection;