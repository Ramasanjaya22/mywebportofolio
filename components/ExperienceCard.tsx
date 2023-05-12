import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-sm items-center space-y-7 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[700px] snap-center bg-[#808080] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-x-hidden overflow-y-hidden">
    <motion.img
      className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      initial={{  
      }}
      src=""
      alt="job image"
    />

    <div className="px-0 md:px-10">
      <h4 className="text-4xl font-light">Job title</h4>
      <p className="font-bold text-2xl mt-1">Telkom University</p>
      <div className="flex space-x-2 my-2">
        <Image className="h-10 w-10 rounded-full" src="" alt="tech image" />
        <Image className="h-10 w-10 rounded-full" src="" alt="tech image" />
      </div>
      <p className="uppercase py-2 text-gray-300 text-sm">
        Started work... -Ended...
      </p>
      <div className="overflow-x-hidden overflow-y-hidden h-fit">
        <ul className=" list-disc space-y-4 ml-4 text-sm ">
          <li>
            Summary points Summary pointsSummary pointsSummary pointsSummary
            pointsSummary points Summary points Summary pointsSummary
            pointsSummary pointsSummary pointsSummary points
          </li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </div>
  </article>
);
};

export default ExperienceCard;