'use client'
import Header from '@/components/Header'
import { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from 'vanta/dist/vanta.globe.min.js'

interface AnimatedCursorProps {
  innerSize: number;
  outerSize: number;
  color: string;
  clickables: string[];
}
interface VantaType {
  destroy: () => void;
}

const AnimatedCursorCustom = dynamic<AnimatedCursorProps>(() => import('react-animated-cursor'), {
  ssr: false
});

const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaType | null>(null);
  const vantaRef = useRef(null);
  
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 0.50,
          scaleMobile: 1.00,
          color: 0x059669,
          color2: 0x006142,
          backgroundAlpha: 0.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
    ref={vantaRef}
     className='container_custom h-screen bg-gray-200 dark:bg-[#09090f] text-slate-600 overflow-x-hidden overflow-y-scroll scrollbar'>
      <Head>
        <title>Rama Sanjaya</title>
      </Head>
      <Header/>
      <section
      
      id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* <section id='skills' className='snap-center'>
        <Skills />
      </section> */}

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>

      
      <AnimatedCursorCustom
      innerSize={15}
      outerSize={15}
      color='5, 150, 105'
      clickables={[
        'span','button',
      ]}
      />
    </div>
  )
}
export default Home;

