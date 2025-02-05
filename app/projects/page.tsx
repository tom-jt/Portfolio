import React from 'react';
import styles from './page.module.css';
import NavBar from '../components/NavBar';
import ProjectFrame from '../components/ProjectFrame';

const Home = () => {
  return (
    <main>
      <NavBar />
      <div className='pl-28 bg-teal-600'>
        <div className={styles.content}>
          <section className={styles.content2}>
            <h1>Games Catalogue 🕹️</h1>
            <p>Here lies a collection of all the games I've made using the Unity Game Engine.</p>
            <div className={styles.projectFrames}>
              <ProjectFrame icon='/image/background.jpg' name='Test Project' desc='Test Project Desc'/>
              <ProjectFrame icon='/image/background.jpg' name='Test Project 2' desc='Test Project Desc'/>
              <ProjectFrame icon='/image/background.jpg' name='Test Project 3' desc='Test Project Desc'/>
            </div>
          </section>

          <section className={styles.content1}>
            <h1>Projects Catalogue ⚙️</h1>
            <p>Here lies a collection of random projects I worked on or contributed to.</p>
            <div className={styles.projectFrames}>
              <ProjectFrame icon='/image/background.jpg' name='Test Project' desc='Test Project Desc'/>
              <ProjectFrame icon='/image/background.jpg' name='Test Project 2' desc='Test Project Desc'/>
              <ProjectFrame icon='/image/background.jpg' name='Test Project 3' desc='Test Project Desc'/>
            </div>
          </section>
        </div>
      </div>


    </main>
  );
};

export default Home;