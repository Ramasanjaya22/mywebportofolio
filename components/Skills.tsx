import React from "react";
import { motion } from "framer-motion";
//import Skill from "./Skill";
//import { Skill as SkillType } from "../typings";

type Props = {
  //skills: SkillType[];
};

const Skills = ({ }: Props) => {
  return (
    <motion.div
      className="flex relative h-screen flex-col justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute hidden sm:block top-36 uppercase tracking-[3px] text-gray-500 text-sm">
      Some Tools & Technologies I&#39;ve Worked With
      </h3>

      <div className="grid grid-cols-6 gap-5">
        <img src="/rama3.png" alt="skill" />
        </div>
      <div className="w-full absolute top-[35%] bg-emerald-700/50 left-0 h-[350px] -skew-y-6" />
      <div className="w-full absolute top-[35%] bg-emerald-700/50 left-0 h-[350px] skew-y-6" />
      
    </motion.div>
  );
};

export default Skills;