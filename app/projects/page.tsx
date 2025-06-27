import React from 'react';
import styles from './page.module.css';
import { PageType } from '@/app/components/NavBar';
import ProjectFrame from '@/app/components/ProjectFrame';
import { Separator } from '@/app/components/Separator';
import ProjectCarousel from '../components/ProjectCarousel';
import Page from '../components/Page';

const Home = () => {
  return (
    <Page activePage={PageType.Projects}>
      <div className={styles.content + ' dynamicHeader'}>
        <section className='bgBlack flex
          max-md:flex-col max-md:px-8'>
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

        <section className='bgTeal flex
          max-md:flex-col max-md:px-8'>
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
    </Page>
  );
};

export default Home;