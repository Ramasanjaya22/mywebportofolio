import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";


interface Project {
  name: string;
  category: string[];
  description: string;
  image: string;
  github: string | null;
  link: string;
  figma: string | null;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const projects: Project[] = [
  
  {
    name: "Reddo : Gamify Reading Tracker",
    category: ["Web","UI Design"],
    description:
      "Reddo is a reading tracking website with a gamify concept equipped with Pomodoro Timer feature, leaderboard, and sharing community. Reddo is my project application and has been participated in Gemastik XV.",
    image: "/project/reddo2.png",
    github: "https://github.com/Ramasanjaya22/Reddo-laravel",
    link: "",
    figma: "https://www.figma.com/proto/wQTEOZQLrp6lqkTRra3fiS/REDDO?type=design&node-id=1412-3686&scaling=min-zoom&page-id=1412%3A476&starting-point-node-id=1412%3A3686"
  },
  {
    name: "FitTrack : Tracking Minum dan Tidur",
    category: ["Android","UI Design"],
    description:
      "FitTrack is a mobile application where you can track your water intake and sleep duration. Not only that, with FitTrack you can monitor both and have a user-friendly display!",
    image: "/project/FitTrack.png",
    github: "",
    link: "https://youtu.be/hdpMlPWxvNc",
    figma: ""
  },
  {
    name: "anatomeAR : Learn Anatomy!",
    category: ["UI Design"],
    description:
    "anatomeAR is a mobile application that helps users to learn human anatomy through augmented reality. Users can point their smartphone camera at a human body and the app will display relevant information, such as the names of bones and muscles. The app also includes quizzes and interactive features to make learning more engaging.",
    image: "/project/anatomyAR.png",
    github: "",
    link: "",
    figma: "https://www.figma.com/proto/WIYlDWbal5iENqGdNFPLv7/AnatomeAR?type=design&node-id=38-3446&scaling=contain&page-id=38%3A3280&starting-point-node-id=38%3A3446"
    },
    {
      name: "AnyBuy",
      category: ["UI Design"],
      description:
      "AnyBuy is an innovative mobile application that lets users purchase goods by scanning them with their mobile devices. AnyBuy design has been copied on the figma community more than 300 times!",
      image: "/project/anybuy.png",
      github: "",
      link: "https://www.figma.com/community/file/1082205502562354983",
      figma: "https://www.figma.com/proto/ddOB5X2M3ODgbbeznksgE4/AnyBuy-Apps-Mobile-apps-(Community)?node-id=1-3&starting-point-node-id=1%3A3&scaling=contain"
      },
  {
    name: "Rama Portofolio",
    category: ["Web"],
    description:
      "My web portfolio is a cool and modern website built with NextJS, TailwindCSS, TypeScript, Framer Motion, and Vanta JS. It showcases my skills and experience through various projects, including web development and UI design. With a responsive design and smooth animations, visitors can easily navigate and explore my work. The Vanta JS background adds a unique touch and enhances the overall aesthetic of the site.",
    image: "/project/rama.png",
    github: "",
    link: "https://ramasanjaya.vercel.app",
    figma: ""
  },
  {
    name: "Netflix Landing Page Clone",
    category: ["Web"],
    description:
      "This project is a Netflix landing page clone that was built using NextJS and MaterialUI. It falls under the category of web development and serves as a showcase of web development skills. The clone closely mimics the layout and design of the original Netflix landing page, providing an opportunity to practice creating complex user interfaces.",
    image: "/project/netflixClone.png",
    github: "https://github.com/Ramasanjaya22/mui-netflix-clone",
    link: "https://mui-netflix-clone-kzt3.vercel.app/",
    figma: ""
  },
  {
    name: "MetaVersus",
    category: ["Web"],
    description:
      "MetaVersus is a web project that features a landing page built using ReactJS, inspired by the tutorials from Javascript Mastery on Youtube. The goal of this project is to showcase a modern and stylish landing page that utilizes the latest web development technologies. With its clean design and smooth user experience, MetaVersus is a great example of how ReactJS can be used to create beautiful and functional websites.",
    image: "/project/metaversus.png",
    github: "https://github.com/Ramasanjaya22/metaversus-jsm",
    link: "https://metaversus-clone.netlify.app/",
    figma: ""
  },
  {
    name: "ChevaLab portofolio Gallery",
    category: ["Web"],
    description:
      "is a web project I developed to showcase the members of the Chevalier Lab Web Development. The project serves as a platform for the members to display their portfolios and skills. It is built using modern web technologies such as NextJS and TailwindCSS, ensuring high performance and scalability.",
    image: "/project/chevaporto.png",
    github: "https://github.com/Ramasanjaya22/Cheva-porto-image-gallery",
    link: "https://cheva-porto-image-gallery.vercel.app/",
    figma: ""
  },
];

const CategoryBadge: FC<{ category: string }> = ({ category }) => {
  let badgeColor = '';
  if (category === 'Web') {
    badgeColor = 'bg-emerald-500';
  } else if (category === 'UI Design') {
    badgeColor = 'bg-red-500';
  } else if (category === 'Android'){
    badgeColor = 'bg-sky-500';
  }
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ${badgeColor}`}>
      {category}
    </span>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-item">
      <h1 className="my-10 text-center uppercase tracking-[20px] text-gray-500 text-xl md:text-3xl">
        Projects
      </h1>


      <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {projects.map((project, index) => (
          <div key={index} className="flex flex-col animate-slideUpCubiBezier animation-delay-2 text-sm px-8">
            <Link href={project.link} target="_blank">
              <Image
                src={project.image}
                alt=""
                width={1000}
                height={1000}
                className="rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
              />
            </Link>
            <ul className="flex justify-start space-x-2 mt-4">
                {project.category.map((category, index) => (
                  <li key={index}>
                    <CategoryBadge category={category} />
                  </li>
                ))}
              </ul>
            <div className="mt-3">
              <h1 className="text-xl font-bold mb-6 text-neutral-900 dark:text-neutral-200">
                {project.name}
              </h1>

              <p className="text-md leading-7 mb-4 text-neutral-600 dark:text-neutral-400 text-justify">
                {project.description}
              </p>
              <div className="flex flex-row align-bottom space-x-4 text-neutral-900 dark:text-neutral-200 mb-4">
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>)}

                {project.link && (
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}

                {project.figma && (
                  <Link href={project.figma} target="_blank">
                    <Image src={"/logo/figma.png"}
                      width={30}
                      height={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                      alt="figma icon"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ProjectsSection;