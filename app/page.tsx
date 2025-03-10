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

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Home} />
      <div className='pl-28 bg-teal-500'>
        <div className={styles.bgBlack}>
          <h1 className={styles.title}>
            HI THERE,<br />I’M TOM.
          </h1>
        </div>

        <Separator />

        <div className={styles.content + ' dynamicHeader'}>
          <section className={styles.content2}>
            <h1>WHO AM I?</h1>
            <div className='flex px-20 mt-8 gap-16 items-center'>
              <Image src='/image/background.jpg' alt='About me' className='object-fit w-1/2 rounded-2xl' width='1920' height='1080' />
              <div className='w-1/2'>
                <p>👋 Hey there! I’m a Computer Science & Law student at UNSW with a passion for building cool things with code 🧋. 
                  I take every new project that I work on as an opportunity to dabble into something new, whether that be a
                  programming language or new software infrastructure 🤖. Here are a list of things I’ve worked with the most ⌨️!
                </p>
                <div className='mt-16 flex gap-8 h-16'>
                  <LanguageIcon icon={<DevC size='4rem' />} link='https://en.wikipedia.org/wiki/C_(programming_language)' />
                  <LanguageIcon icon={<DevCS size='4rem' />} link='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' />
                  <LanguageIcon icon={<DevJava size='4rem' />} link='https://www.java.com/en/' />
                  <LanguageIcon icon={<DevUnity size='4rem' />} link='https://unity.com/' />
                  <LanguageIcon icon={<DevNext size='4rem' />} link='https://nextjs.org/' />
                  <LanguageIcon icon={<DevTS size='4rem' />} link='https://nextjs.org/' />
                  <LanguageIcon icon={<DevTW size='4rem' />} link='https://tailwindcss.com/' />
                  <LanguageIcon icon={<DevPostSQL size='4rem' />} link='https://www.postgresql.org/' />
                </div>
              </div>
            </div>

          </section>

          <SeparatorReverse />

          <section className={styles.content1}>
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