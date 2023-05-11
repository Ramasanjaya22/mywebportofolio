"use client";
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

type Props = {}

function Header({}: Props) {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme;

  return (
    
      <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center'>
        <motion.div
        initial={{ 
          x: -500,
          opacity: 0,
          scale: 0.5
         }}
         animate={{ 
          x: 0,
          opacity: 1,
          scale: 1
          }}
          transition={{ 
            duration: 1.5,
           }}

        className='flex flex-row items-center invisible sm:visible md:visible lg:visible xl:visible'
         >
        <SocialIcon target='_blank'  url="https://www.linkedin.com/in/rama-sanjaya22"
        fgColor='gray'
        
        bgColor='transparent'/>
        <SocialIcon target='_blank' url="https://github.com/Ramasanjaya22"
        fgColor='gray'
        bgColor='transparent'/>
         <SocialIcon target='_blank' url="https://medium.com/@ramasanjaya3302"
        fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon target='_blank' url="https://twitter.com/Ramaas_8"
        fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon target='_blank' url="https://www.figma.com/@ramaas_8"
        fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon target='_blank' url="https://www.instagram.com/ramaas_8/"
        fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon target='_blank' url="https://open.spotify.com/playlist/6Pe3htFBggb4O5B4qzbFRc?si=f466c28a64ef43be"
        fgColor='gray'
        bgColor='transparent'/>
        
        </motion.div>

        

        <div className='flex items-center justify-between'>
        <motion.div
        initial={{ 
          x: 500,
          opacity: 0,
          scale: 0.5
         }}
         animate={{ 
          x: 0,
          opacity: 1,
          scale: 1
          }}
          transition={{ 
            duration: 1.5,
           }}
        >
          {currentTheme === "light" ? (
                <button
                onClick={() => setTheme("dark")}
              >
                <RiMoonFill size={28} color='gray' className='mt-1' />
              </button>
              ) : (
                <button
                onClick={() => setTheme("light")}
              >
                <RiSunLine size={28} color="gray" className='mt-1' />
              </button>
              )}
        </motion.div>
          <Link href='#contact' legacyBehavior>
        <motion.div
        initial={{ 
          x: 500,
          opacity: 0,
          scale: 0.5
         }}
         animate={{ 
          x: 0,
          opacity: 1,
          scale: 1
          }}
          transition={{ 
            duration: 1.5,
           }}
           
        className='flex flex-row items-center text-gray-300 cursor-pointer visible'>

        <SocialIcon
         
                className="cursor-pointer"
                network="email"
        fgColor='gray'
        bgColor='transparent'/>

        <div className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact me
        </div>
        </motion.div>
        </Link>
        </div>
      </header>
    
  )
}

export default Header