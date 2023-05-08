import { motion } from 'framer-motion'
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
            <h4 className='text-5xl font-semibold font-mono'>Get to {" "}
            <span className='underline decoration-emerald-600'>know</span>{" "}
            me
            </h4>
    <p className='text-sm'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis laborum quod ea facere inventore cumque quasi aliquid, rem dolore doloremque sapiente dolorem accusamus, repellat reiciendis, maxime incidunt perspiciatis vel aliquam!
    Maxime ex, minus fugiat itaque numquam ducimus nulla. Assumenda, a voluptatem repellendus aspernatur nihil ipsa quaerat, obcaecati sed illum ut quod voluptates. Soluta earum voluptates tenetur deserunt fugit blanditiis quas.</p>            
        </div>
    </motion.div>
    
  )
}