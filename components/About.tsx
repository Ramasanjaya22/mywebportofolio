import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  

  return (
    
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

    <h3 className='absolute top-5 lg:top-2 uppercase tracking-[24px] text-gray-500 text-2xl
        '>About</h3>

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
         className="-mb-20 md:mb-0 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-full xl:w-[500px] xl:h-[600px]"
        />

<div className='space-y-8 px-0 md:px-8'>
            <h4 className='text-5xl font-semibold font-mono mt-4'>Get to {" "}
            <span className='underline decoration-emerald-600'>know</span>{" "}
            me
            </h4>
            <div className='justify-stretch text-justify dark:text-gray-400'>
            <div className='text-sm leading-6 tracking-[1px]'>
  <motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}>
    💻 As a&nbsp;
    <Link target='_blank' className='font-semibold text-emerald-600 hover:animate-pulse' href={'https://www.devry.edu/online-programs/area-of-study/technology/what-does-a-software-developer-do.html#:~:text=interact%20with%20computers.-,What%20Is%20the%20Job%20Description%20for%20a%20Software%20Developer%3F,that%20those%20systems%20remain%20functional.'}> Software Developer</Link>, I strongly believe that technology can bring about effective solutions to the various challenges faced by society. I&apos;m always on the lookout for ways to enhance my skills and find innovative ways of leveraging technology to create products and services that can benefit a large number of people.
  </motion.p>
  <br />
  <motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 1}}>
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
  <br />
  <motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{delay: 1.5}}>
    🎓 As a student of Informatics at&nbsp;
    <Link target='_blank' className=' font-semibold text-red-500 hover:animate-pulse' href={'https://telkomuniversity.ac.id/'}>Telkom University</Link>, I have acquired a solid foundation in programming and software development that I continue to build upon with my professional experience. I&apos;m passionate about learning and applying new concepts to develop innovative solutions. I&apos;m eager to learn and grow as a developer, and am committed to keeping up-to-date with the latest technologies and trends in the industry.
  </motion.p>
</div>
    </div>
        </div>
    </motion.div>
    
  )
}