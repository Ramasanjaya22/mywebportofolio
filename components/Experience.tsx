import React from 'react'
//import ExperienceCard from "./ExperienceCard";
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {}

export default function Experience({ }: Props) {

  const experiences = [
    {
      jobTitle: "Frontend Mentor",
      companyImage: "/logo/cheva.jpg",
      companyName: "Chevalier Lab",
      techImages: ["/logo/html.png","/logo/css.png","/logo/js.png","/logo/react.png"],
      jobDates: "Nov 2022 - Present",
      summaryPoints: ["Responsible for trained and mentored a group of 25 individuals in basic HTML, CSS, JavaScript, and React JS.","Fostered a positive and inclusive learning environment, promoting collaboration, teamwork, and mutual respect among students from diverse backgrounds and skill levels.","Collaborated with other mentors and instructors to develop a comprehensive and cohesive learning program"],
    },
    {
      jobTitle: "Asisstant Lecture",
      companyImage: "/logo/telkom.png",
      companyName: "Telkom University",
      techImages: ["/logo/java.png","/logo/git.png","/logo/github.png"],
      jobDates: "Oct 2022 - Jan 2023",
      summaryPoints: ["Helping lecturer in delivering course content related to programming and algorithms using the Java programming language", "Aims to help students equip the knowledge to write efficient, reusable, and maintainable code","Teaching Version Control System (VCS) with Git and GitHub. Helped students understand the basics of VCS, including creating and managing repositories"],
    },
    {
      jobTitle: "Freelancer",
      companyImage: "/logo/fiverr.png",
      companyName: "Fiverr",
      techImages: ["/logo/figma.png", "/logo/nextjs.png","/logo/unity.png","/logo/ts.png"],
      jobDates: "August 2022 - Present",
      summaryPoints: ["Providing UI design services to clients. Creating visually appealing and user-friendly", "Another service that I offer is website development using the MERN stack. This involves using MongoDB, Express, React, and Node.js to create high-performance web applications that are responsive and scalable."],
    },
    {
      jobTitle: "GitHub Contributor",
      companyImage: "/logo/github.png",
      companyName: "GitHub",
      techImages: ["/logo/ts.png", "/logo/nextjs.png","/logo/react.png","/logo/tailwind.png"],
      jobDates: "Jan 2022 - Present",
      summaryPoints: ["Collaborating with other project contributors to develop and improve open source software", "Contributing code to various projects on GitHub, including bug fixes, feature enhancements, and documentation updates"],
    }
  ];

  
  return (
    <div>
    <h3 className="mt-40 md:mt-8 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
    Experience
  </h3>
    <motion.div
      className="h-screen relative flex flex-col justify-center items-center mx-auto overflow-hidden text-left md:flex-row max-w-full"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >    
      <div className="w-full h-auto flex space-x-2 overflow-x-scroll scrollbar p-8 item-center md:justify-center">
        {/* experiencecard */}
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
          
        </div>
      
    </motion.div>
    </div>
  );
}