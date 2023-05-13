import React from 'react'
//import ExperienceCard from "./ExperienceCard";
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {}

export default function Experience({ }: Props) {
  const experiences = [
    {
      jobTitle: "Frontend Mentor",
      companyImage: "https://chevalier.labs.telkomuniversity.ac.id/wp-content/uploads/sites/51/2022/05/ChevalierLab2-2-1024x1024.png",
      companyName: "Chevalier Lab",
      techImages: ["https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png", "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"],
      jobDates: "Jan 2020 - Feb 2021",
      summaryPoints: ["loremloremloremloremloremloremloremloremloremloremloremloremloremlorem", "Summary point 2", "Summary point 3"],
    },
    {
      jobTitle: "Job title 2",
      companyImage: "https://chevalier.labs.telkomuniversity.ac.id/wp-content/uploads/sites/51/2022/05/ChevalierLab2-2-1024x1024.png",
      companyName: "Company name 2",
      techImages: ["https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png", "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"],
      jobDates: "Mar 2021 - Present",
      summaryPoints: ["Summary point 1", "Summary point 2", "Summary point 3"],
    },
    {
      jobTitle: "Job title 2",
      companyImage: "https://chevalier.labs.telkomuniversity.ac.id/wp-content/uploads/sites/51/2022/05/ChevalierLab2-2-1024x1024.png",
      companyName: "Company name 2",
      techImages: ["https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png", "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"],
      jobDates: "Mar 2021 - Present",
      summaryPoints: ["Summary point 1", "Summary point 2", "Summary point 3"],
    },
    {
      jobTitle: "Job title 2",
      companyImage: "https://chevalier.labs.telkomuniversity.ac.id/wp-content/uploads/sites/51/2022/05/ChevalierLab2-2-1024x1024.png",
      companyName: "Company name 2",
      techImages: ["https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png", "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"],
      jobDates: "Mar 2021 - Present",
      summaryPoints: ["Summary point 1", "Summary point 2", "Summary point 3"],
    },
    {
      jobTitle: "Job title 2",
      companyImage: "https://chevalier.labs.telkomuniversity.ac.id/wp-content/uploads/sites/51/2022/05/ChevalierLab2-2-1024x1024.png",
      companyName: "Company name 2",
      techImages: ["https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png", "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"],
      jobDates: "Mar 2021 - Present",
      summaryPoints: ["Summary point 1", "Summary point 2", "Summary point 3"],
    },
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
      <div className="w-full md:h-[80%] flex space-x-2 overflow-x-scroll scrollbar p-8 item-center md:justify-center">
        {/* experiencecard */}
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
          
        </div>
      
    </motion.div>
    </div>
  );
}