import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from '@/app/components/NavBar';
import ProjectFrame from '@/app/components/ProjectFrame';
import { Separator } from '@/app/components/Separator';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => {
  return (
    <main className='flex w-full'>
      <NavBar active={Page.Projects} />

      <div className={styles.content + ' bg-teal-500 dynamicHeader'}>
        <section className='bgBlack'>
          <h1>Projects Catalogue</h1>
          <p>Here lies a collection of random projects I worked on or contributed to 💻.</p>
          <ProjectCarousel>
            <ProjectFrame id='xchange' />
            {/* <ProjectFrame id='toohak' /> */}
            <ProjectFrame id='portfolio' />
            <ProjectFrame id='tributary' />
          </ProjectCarousel>
        </section>

        <Separator />

        <section className='bgTeal'>
          <h1>Games Catalogue</h1>
          <p>Here lies a collection of all the games I’ve made using the Unity Game Engine 🕹️.</p>
          <ProjectCarousel>
            <ProjectFrame id='linguae-legend' />
            <ProjectFrame id='con-grazia' />
            <ProjectFrame id='mission-improbable' />
            <ProjectFrame id='diviners-gambit' />
          </ProjectCarousel>
        </section>
      </div>


    </main>
  );
};

export default Home;