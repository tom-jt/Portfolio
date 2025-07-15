import React from 'react';
import styles from './page.module.css';
import { PageType } from '@/app/components/NavBar';
import { Separator } from '@/app/components/Separator';
import ProjectCarousel from '../components/ProjectCarousel';
import Page from '../components/Page';

const Projects = () => {
  const projectIds = ['tributary', 'xchange', 'portfolio']; // TODO: Add toohak
  const gameIds = ['linguae-legend', 'con-grazia', 'mission-improbable', 'diviners-gambit'];

  return (
    <Page activePage={PageType.Projects}>
      <div className={styles.content + ' dynamicHeader'}>
        <section className='bgBlack flex
          max-md:flex-col max-md:px-8'>
          <h1>Projects Catalogue</h1>
          <p>Here lies a collection of random projects I worked on or contributed to 💻.</p>
          <ProjectCarousel projectIds={projectIds} />
        </section>

        <Separator />

        <section className='bgTeal flex
          max-md:flex-col max-md:px-8'>
          <h1>Games Catalogue</h1>
          <p>Here lies a collection of all the games I’ve made using the Unity Game Engine 🕹️.</p>
          <ProjectCarousel projectIds={gameIds} />
        </section>
      </div>
    </Page>
  );
};

export default Projects;