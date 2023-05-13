import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  jobTitle: string;
  companyImage: string;
  companyName: string;
  techImages: string[];
  jobDates: string;
  summaryPoints: string[];
};

const ExperienceCard = ({ jobTitle,companyImage, companyName, techImages, jobDates, summaryPoints }: Props) => {
  return (
    <article className="flex flex-col rounded-sm items-center flex-shrink-0 w-44 md:w-64 xl:w-80 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 cursor-pointer transition-all">
    <motion.img
      className="w-24 h-24 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center p-4"
      src={companyImage}
      alt="job image"
    />
  
  <div className="px-8 md:px-10 text-justify">
      <h4 className="text-xl font-light">{jobTitle}</h4>
      <p className="font-bold text-sm mt-1">{companyName}</p>
      <div className="flex space-x-2 my-2">
        {techImages.map((image, index) => (
          <img key={index} className="h-10 w-10 rounded-full" src={image} alt="tech image" />
        ))}
      </div>
      <p className="uppercase py-2 text-xs font-semibold">{jobDates}</p>
      <div className="overflow-x-hidden overflow-y-hidden h-fit">
        <ul className=" list-disc space-y-4 ml-4 text-sm ">
          {summaryPoints.map((point, index) => (
            <li key={index} className="whitespace-pre-wrap break-all">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </article>
  
);
};

export default ExperienceCard;