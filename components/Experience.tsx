import React from 'react'
//import ExperienceCard from "./ExperienceCard";
import { motion } from 'framer-motion';
type Props = {}

export default function Experience({ }: Props) {
  return (
    <motion.div
      className="h-screen relative flex flex-col justify-evenly items-center mx-auto overflow-hidden text-left md:flex-row max-w-full px-10"
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
      <h3 className="absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full md:h-[80%] flex space-x-2 overflow-x-scroll scrollbar p-8 snap-x snap-mandatory">

        {/* experiencecard */}
        {/* 1 */}
          <article className="flex flex-col rounded-sm items-center flex-shrink-0 w-[200px] md:w-[300px] xl:w-[700px] snap-center bg-[#d3d3d3] hover:bg-[#c5c5c5] cursor-pointer transition ease-in-out duration-200 overflow-x-hidden overflow-y-hidden">
            <motion.img
              className="w-24 h-24 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center p-4"
              initial={{
              }}
              src="https://chevalier.labs.telkomuniversity.ac.id/wp-content/uploads/sites/51/2022/05/ChevalierLab2-2-1024x1024.png"
              alt="job image"
            />
            <div className=" md:px-10">
              <h4 className="text-2xl font-light">Frontend Mentor</h4>
              <p className="font-bold text-sm mt-1">Chevalier Lab</p>
              <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="tech image" />
                
              </div>
              <p className="uppercase py-2 text-gray-600 text-xs font-semibold">
                Started work 2022 -Ended 2023
              </p>
              <div className="overflow-x-hidden overflow-y-hidden h-fit">
                <ul className=" list-disc space-y-4 ml-4 text-sm ">
                  <li>
                  Teaching about Frontend
                  </li>
                </ul>
              </div>
            </div>
          </article>
          {/* 2 */}
          <article className="flex flex-col rounded-sm items-center flex-shrink-0 w-[200px] md:w-[300px] xl:w-[700px] snap-center bg-[#d3d3d3] hover:bg-[#c5c5c5] cursor-pointer transition ease-in-out duration-200 overflow-x-hidden overflow-y-hidden">
            <motion.img
              className="w-24 h-24 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center p-4"
              initial={{
              }}
              src="https://ypt.or.id/wp-content/uploads/2019/01/TU-logogram-238x300.jpg"
              alt="job image"
            />
            <div className=" md:px-10">
              <h4 className="text-2xl font-light">Assistant Lecture</h4>
              <p className="font-bold text-sm mt-1">Telkom University</p>
              <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="https://academy.alterra.id/blog/wp-content/uploads/2021/06/java.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="tech image" />
              </div>
              <p className="uppercase py-2 text-gray-600 text-xs font-semibold">
                Started work 2022 -Ended 2023
              </p>
              <div className="overflow-x-hidden overflow-y-hidden h-fit">
                <ul className=" list-disc space-y-4 ml-4 text-sm ">
                  <li>
                  Teaching about Frontend
                  </li>
                </ul>
              </div>
            </div>
          </article>
          {/* 3 */}
          <article className="flex flex-col rounded-sm items-center flex-shrink-0 w-[200px] md:w-[300px] xl:w-[700px] snap-center bg-[#d3d3d3] hover:bg-[#c5c5c5] cursor-pointer transition ease-in-out duration-200 overflow-x-hidden overflow-y-hidden">
            <motion.img
              className="w-24 h-24 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center p-4"
              initial={{
              }}
              src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/fiverr-og-logo.5fd6463.png"
              alt="job image"
            />
            <div className=" md:px-10">
              <h4 className="text-xl font-light">Freelancer</h4>
              <p className="font-bold text-sm mt-1">Fiverr</p>
              <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://logowik.com/content/uploads/images/figma.jpg" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="tech image" />
                
              </div>
              <p className="uppercase py-2 text-gray-600 text-xs font-semibold">
                Started work 2022 -Ended 2023
              </p>
              <div className="overflow-x-hidden overflow-y-hidden h-fit">
                <ul className=" list-disc space-y-4 ml-4 text-sm ">
                  <li>
                  Teaching about Frontend
                  </li>
                </ul>
              </div>
            </div>
          </article>
          {/*  */}
          <article className="flex flex-col rounded-sm items-center flex-shrink-0 w-[200px] md:w-[300px] xl:w-[700px] snap-center bg-[#d3d3d3] hover:bg-[#c5c5c5] cursor-pointer transition ease-in-out duration-200 overflow-x-hidden overflow-y-hidden">
            <motion.img
              className="w-24 h-24 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center p-4"
              initial={{
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
              alt="job image"
            />
            <div className=" md:px-10">
              <h4 className="text-xl font-light">GitHub Contributor</h4>
              <p className="font-bold text-sm mt-1">Github</p>
              <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="tech image" />
                <img className="h-10 w-10 rounded-full" src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png" alt="tech image" />
                
              </div>
              <p className="uppercase py-2 text-gray-600 text-xs font-semibold">
                Started work 2022 -Ended 2023
              </p>
              <div className="overflow-x-hidden overflow-y-hidden h-fit">
                <ul className=" list-disc space-y-4 ml-4 text-sm ">
                  <li>
                  Teaching about Frontend
                  </li>
                </ul>
              </div>
            </div>
          </article>
          

        </div>
      
    </motion.div>
  );
}