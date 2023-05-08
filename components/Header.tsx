import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
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

        className='flex flex-row items-center'
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
           
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
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
        
      </header>
    
  )
}

export default Header