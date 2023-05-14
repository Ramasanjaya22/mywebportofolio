import React from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";



type Props = {

};

const Skills = ({ }: Props) => {
  return (
    <motion.div
      className="relative h-screen flex flex-col justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
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
        Some Tools & Technologies I&apos;ve Worked With
      </h3>

      <div className="grid grid-cols-6 gap-5 mt-12 z-10">
        
        <div className="col-span-1 flex justify-end items-center ">
          <Image src="/logo/html.png" alt="HTML5" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/css.png" alt="CSS3" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/js.png" alt="JavaScript" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/react.png" alt="React" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/tailwind.png" alt="TailwindCSS" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/nextjs.png" alt="Next.js" width={48} height={48} className="rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5 mt-12 z-10">
        <div className="col-span-1 flex justify-end items-center ">
          <Image src="/logo/nodejs.png" alt="Node.js" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/express.png" alt="Express.js" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/mongodb.png" alt="MongoDB" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/firebase.png" alt="Firebase" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/vercel2.png" alt="Heroku" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/aws.png" alt="AWS" width={48} height={48} className="rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5 mt-12 z-10">
        <div className="col-span-1 flex justify-end items-center ">
          <Image src="/logo/git.png" alt="Git" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/github.png" alt="GitHub" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/figma.png" alt="Figma" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image src="/logo/Unity.png" alt="Unity" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          {/* finishing my rest of code!  */}
          <Image src="/logo/mysql.png" alt="my sql" width={48} height={48} className="rounded-full" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          {/* finishing my rest of code!  */}
          <Image src="/logo/kotlin.png" alt="kotlin" width={48} height={48} className="rounded-full" />
        </div>
      </div>
      </motion.div>
  );
};
export default Skills;
      
      
