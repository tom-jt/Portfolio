import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from './components/NavBar';
import ProjectFrame from './components/ProjectFrame';
import { Separator, SeparatorReverse } from './components/Separator';
import Image from 'next/image';
import LanguageIcon from './components/LanguageIcon';
import DevC from 'devicons-react/icons/COriginal';
import DevCS from 'devicons-react/icons/CsharpOriginal';
import DevJava from 'devicons-react/icons/JavaOriginal';
import DevUnity from 'devicons-react/icons/UnityOriginal';
import DevNext from 'devicons-react/icons/NextjsOriginal';
import DevTS from 'devicons-react/icons/TypescriptPlain';
import DevTW from 'devicons-react/icons/TailwindcssOriginal';
import DevPostSQL from 'devicons-react/icons/PostgresqlOriginal';
import BorderedImage from './components/BorderedImage';

const Home = () => {
  return (
    <main className='flex w-full'>
      <NavBar active={Page.Home} />

      <div className='bg-teal-500 flex-grow'>
        <div className='bgBlack h-screen flex items-center justify-center'>
          <h1 className={styles.title}>
            HI THERE,<br />I’M TOM.
          </h1>
        </div>

        <Separator />

        <div className={styles.content + ' dynamicHeader'}>
          <section className='bgTeal'>
            <h1>WHO AM I?</h1>
            <div className='flex items-center justify-center gap-16'>
              <div className='w-1/3'>
                <BorderedImage src='/image/background.jpg' />
              </div>
              <div className='w-1/3 flex flex-col gap-4 text-justify'>
                <p>👋 Hey there! I’m a Computer Science & Law student at UNSW with a passion for building cool things with code 🧋. 
                  I take every new project that I work on as an opportunity to dabble into something new, whether that be a
                  programming language or new software infrastructure 🤖. Here are a list of things I’ve worked with the most ⌨️!
                </p>
                <div className='flex flex-wrap overflow-visible h-12 gap-4 items-center justify-center'>
                  <LanguageIcon icon={<DevC size='3rem' />} link='https://en.wikipedia.org/wiki/C_(programming_language)' />
                  <LanguageIcon icon={<DevCS size='3rem' />} link='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' />
                  <LanguageIcon icon={<DevJava size='3rem' />} link='https://www.java.com/en/' />
                  <LanguageIcon icon={<DevUnity size='3rem' />} link='https://unity.com/' />
                  <LanguageIcon icon={<DevNext size='3rem' />} link='https://nextjs.org/' />
                  <LanguageIcon icon={<DevTS size='3rem' />} link='https://nextjs.org/' />
                  <LanguageIcon icon={<DevTW size='3rem' />} link='https://tailwindcss.com/' />
                  <LanguageIcon icon={<DevPostSQL size='3rem' />} link='https://www.postgresql.org/' />
                </div>
              </div>
            </div>

          </section>

          <SeparatorReverse />

          <section className='bgBlack'>
            <h1>Featured Projects</h1>
            <p>Here are some of the projects I’m most proud of 💖. Take a look 👀!</p>
            <div className={styles.projectFrames}>
              <ProjectFrame id='linguae-legend'/>
              <ProjectFrame id='con-grazia'/>
              <ProjectFrame id='xchange'/>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;