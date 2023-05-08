import React, { useState } from "react";
import { motion } from "framer-motion";
//import { Skill } from "../typings";
//import { urlFor } from "../sanity";

type Props = {
};

const Skill = ({ skill, directionLeft }: Props) => {
  const [skillName, setSkillName] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClickSkill = () => {
    setSkillName((skillName) => skill.title);
    setClicked((clicked) => !clicked);
  };

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border border-gray-500 object-contain h-10 w-10 sm:w-24 sm:h-24 md:w-26 md:h-26 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? "-100%" : "100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(skill?.image).url()}
        alt="skill"
      />
      <motion.div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 sm:h-24 sm:w-24 md:w-26 md:h-26 xl:w-26 xl:h-26 rounded-full z-0"
        initial={{
          x: directionLeft ? "-100%" : "100%",
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div
          className="flex items-center justify-center h-full"
          onClick={handleClickSkill}
        >
          <span
            id="skill"
            className="text-3xl font-bold text-black opacity-100"
          >
            {clicked ? (
              <p className="text-center text-xs sm:text-lg mx-auto">
                {skillName}
              </p>
            ) : (
              <p className=" text-center text-sm sm:text-lg mx-auto">
                {skill.progress + "%"}
              </p>
            )}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;