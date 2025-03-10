import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from '@/app/components/NavBar';
import ProjectFrame from '@/app/components/ProjectFrame';
import { Separator } from '@/app/components/Separator';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Projects} />
      <div className='pl-28 bg-teal-500 dynamicHeader'>
        <div className={styles.content}>
          <section className={styles.content1}>
            <h1>Projects Catalogue</h1>
            <p>Here lies a collection of random projects I worked on or contributed to 💻.</p>
            <div className='bg-tblack-950/50 w-full h-4 mt-10'/>
            <div className={styles.projectFrames + ' bg-tblack-950'}>
              <ProjectFrame id='xchange'/>
              <ProjectFrame id='toohak'/>
              <ProjectFrame id='portfolio'/>
              <ProjectFrame id='tributary'/>
            </div>
          </section>

          <Separator />

          <section className={styles.content2}>
            <h1>Games Catalogue</h1>
            <p>Here lies a collection of all the games I’ve made using the Unity Game Engine 🕹️.</p>
            <div className='bg-teal-700/50 w-full h-4 mt-10'/>
            <div className={styles.projectFrames + ' bg-teal-700'}>
              <ProjectFrame id='linguae-legend'/>
              <ProjectFrame id='con-grazia'/>
              <ProjectFrame id='mission-improbable'/>
              <ProjectFrame id='diviners-gambit'/>
            </div>
          </section>
        </div>
      </div>


    </main>
  );
};

export default Home;