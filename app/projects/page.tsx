import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from '@/app/components/NavBar';
import ProjectFrame from '@/app/components/ProjectFrame';
import { Separator, SeparatorReverse } from '@/app/components/Separator';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Projects} />
      <div className='pl-28 bg-teal-600'>
        <div className={styles.content}>
          <section className={styles.content2}>
            <h1>Games Catalogue 🕹️</h1>
            <p>Here lies a collection of all the games I've made using the Unity Game Engine.</p>
            <div className='bg-teal-700/50 w-full h-4 mt-10'/>
            <div className={styles.projectFrames + ' bg-teal-700'}>
              <ProjectFrame icon='/image/background.jpg' name='Linguae Legend' desc='Wordle-inspired puzzle game infused with fantasy elements' id='linguae-legend'/>
              <ProjectFrame icon='/image/background2.jpg' name='Con Grazia' desc='Endless shooter game that comes with slimes in many flavours' id='con-grazia'/>
              <ProjectFrame icon='/image/background.jpg' name='[MISSION IMPROBABLE]' desc='Very challenging first-person shooter game' id='mission-improbable'/>
              <ProjectFrame icon='/image/background2.jpg' name="Diviners' Gambit" desc='Online multiplayer card game' id='diviners-gambit'/>
            </div>
          </section>

          <SeparatorReverse />

          <section className={styles.content1}>
            <h1>Projects Catalogue ⚙️</h1>
            <p>Here lies a collection of random projects I worked on or contributed to.</p>
            <div className='bg-tblack-950/50 w-full h-4 mt-10'/>
            <div className={styles.projectFrames + ' bg-tblack-950'}>
              <ProjectFrame icon='/image/background.jpg' name='xChange' desc='Web-based University exchange program browser' id='xchange'/>
              <ProjectFrame icon='/image/background2.jpg' name='Toohak' desc='Kahoot knockoff' id='toohak'/>
              <ProjectFrame icon='/image/background.jpg' name='Portfolio' desc='The very website you are on right now!' id='portfolio'/>
            </div>
          </section>
        </div>
      </div>


    </main>
  );
};

export default Home;