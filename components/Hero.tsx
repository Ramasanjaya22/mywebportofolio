import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'


const nameLetters = ["R", "A", "M", "A", "&lsquo;", "S", "A", "N", "J", "A", "Y", "A"];

const TitleLetter = (props: { name: string; index: number }) => {
  const { name, index } = props;
  const [animating, setAnimating] = useState<boolean>(false);

  return (
    <motion.li
      key={name}
      className={`cursor-pointer ${animating ? "animate-rotate" : ""} mr-3`}
      initial={{ rotateY: 0, color: "#999999" }}
      onMouseEnter={() => setAnimating(true)
    }
      onAnimationEnd={() => setAnimating(false)}
      style={{ fontSize: "4vw", animationFillMode: "forwards" }}
    >
      {index === 4 ? String.fromCharCode(160) : name}
    </motion.li>
  );
};

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "<Fullstack Developer />",
            "Love to Code👨‍💻",
            "Also Love Design:)🎨",
        ],
        loop: true,
        delaySpeed: 3000,
        typeSpeed:70,
    })
    return (
        <div className='h-screen flex flex-col justify-center text-center overflow-hidden items-center scroll-smooth'>

            <BackgroundCircles />
            
            <Image
                className='relative rounded-full mx-auto object-cover border border-emerald-300'
                src="/rama3.png"
                width={'128'}
                height={'128'}
                alt="profile" />
        
            <div className='z-20'>
                {/* <h2 className='text-sm my-2 uppercase text-gray-700 tracking-[15px]'>Rama Sanjaya</h2> */}

                <div className="md:mt-2 ">
          <div className="text-4xl mt-6 md:mt-0 md:text-6xl">
            <motion.ul
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {nameLetters.map((value, index) => (
                <TitleLetter key={index} name={value} index={index} />
              ))}
            </motion.ul>
            </div>
            </div>

                <h1 className='text-3xl lg:text-4xl font-serif font-bold px-10 text-emerald-600 mt-2'>
                    <span className='mr-3 italic'>{text}</span>
                    <Cursor cursorColor="#0cdb7e" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}