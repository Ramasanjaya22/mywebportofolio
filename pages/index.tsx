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



interface AnimatedCursorProps {
  innerSize: number;
  outerSize: number;
  color: string;
  clickables: string[];
}

const AnimatedCursorCustom = dynamic<AnimatedCursorProps>(() => import('react-animated-cursor'), {
  ssr: false
});

const Home: NextPage = () => {
  return (
    <div className='container_custom h-screen bg-gray-200 text-slate-600 overflow-x-hidden overflow-y-scroll scrollbar'>
      <Head>
        <title>Rama Sanjaya</title>
      </Head>
      <Header/>
      <section id='hero' className='snap-start'>
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

      {/* <section id='projects' className='snap-center'>
        <Projects />
      </section> */}

      <section id='contact' className='snap-center'>
        <Contact />
      </section>

      
      <AnimatedCursorCustom
      innerSize={15}
      outerSize={15}
      color='5, 150, 105'
      clickables={[
        'span','button'
      ]}
      />
    </div>
  )
}
export default Home;

