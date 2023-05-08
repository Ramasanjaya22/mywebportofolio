import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{ 
        opacity:0,
     }}
     animate={{ 
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1],
        borderRadius: ["20%", "50%", "80%", "50%", "20%"],
      }}
      transition={{ 
        duration: 2,
       }}
     
    className='relative flex justify-center items-center'>
        <div className='rounded-full absolute border-2 border-[#9bfacfc9] h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='rounded-full border border-[#c9fde6] h-[300px] w-[300px] mt-52 absolute animate-pulse'/>
        <div className='rounded-full border border-[#c9fde6] h-[500px] w-[500px] mt-52 absolute animate-pulse'/>
        <div className='rounded-full border-2 border-[#a2ffd5] h-[650px] w-[650px] mt-52 absolute animate-pulse'/>
        <div className='rounded-full border border-[#c9fde6] h-[800px] w-[800px] mt-52 absolute animate-pulse'/>
        <div className='rounded-full border border-[#c9fde6] h-[1000px] w-[1000px] mt-52 absolute animate-pulse'/>
    </motion.div>
  )
}