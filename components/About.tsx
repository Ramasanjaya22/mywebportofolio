import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  

  return (
    <div>
       <h3 className="mt-40 md:mt-8 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
    About
  </h3>
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center sm:my-16'>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{ 
            duration: 1.2,
         }}
         whileInView={{ opacity:1, x:0 }}
         viewport={{ once:true }}
         src='/rama-2.png'
         className=" md:mb-0 flex-shrink-0 sm:w-48 sm:h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-full xl:w-[500px] xl:h-[600px]"
        />

    <div className='space-y-8 px-0 md:px-8 '>
            <h4 className='text-5xl font-semibold font-mono'>Get to {" "}
            <span className='underline decoration-emerald-600'>know</span>{" "}
            me
            </h4>
            <div className='justify-stretch text-justify dark:text-gray-400'>
            <div className='text-sm leading-6 tracking-[1px]'>
  
  <motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 1}}>
    🎓 As a student of Informatics at&nbsp;
    <Link target='_blank' className=' font-semibold text-red-500 hover:animate-pulse' href={'https://telkomuniversity.ac.id/'}>Telkom University</Link>, I have acquired a solid foundation in programming and software development that I continue to build upon with my professional experience. I&apos;m passionate about learning and applying new concepts to develop innovative solutions. I&apos;m eager to learn and grow as a developer, and am committed to keeping up-to-date with the latest technologies and trends in the industry.
  </motion.p>
  <br />
  <motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 1.5}}>
    🛠️ My name is Rama and I&apos;m a Fullstack developer with hands-on experience in working with a wide range of technologies such as&nbsp;
    <Link target='_blank' className=' font-semibold text-sky-500 hover:animate-pulse' href={'https://react.dev/'}>React</Link>
    ,&nbsp;
    <Link target='_blank' className=' font-semibold text-sky-400 hover:animate-pulse' href={'https://tailwindcss.com/'}>TailwindCSS</Link>
    ,&nbsp;
    <Link target='_blank' className=' font-semibold text-slate-500 hover:animate-pulse' href={'https://nextjs.org/'}>NextJS</Link>
    , and&nbsp;
    <Link target='_blank' className=' font-semibold text-purple-400 hover:animate-pulse' href={'https://www.figma.com/'}>Figma</Link>.
    Additionally, I possess expertise in game and AR development utilizing&nbsp;
    <Link target='_blank' className=' font-semibold text-slate-600 hover:animate-pulse' href={'https://www.unity.com/'}>Unity</Link>.
    I enjoy fusing together my design and development skills to create products that are both visually appealing and user-friendly. I approach every project with meticulous attention to detail, an organized mindset, and a strong drive to explore new technologies and conceive creative ways to utilize them. My main focus is on developing solutions that are user-friendly, intuitive, and easy-to-use.
  </motion.p>
  
 
</div>
    </div>
        </div>
        
    </motion.div>
    </div>
    
  )
}