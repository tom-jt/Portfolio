import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from './components/NavBar';
import ProjectFrame from './components/ProjectFrame';
import { Separator, SeparatorReverse } from '@/app/components/Separator';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Home} />
      <div className='pl-28 bg-teal-600'>
        <div className={styles.bgBlack}>
          <h1 className={styles.title}>
            HI THERE,<br />I'M TOM.
          </h1>
        </div>

        <Separator />

        <div className={styles.content + ' dynamicHeader'}>
          <section className={styles.content2}>
            <h1>WHO AM I?</h1>
            <p>👋 Hey there! I’m a Computer Science & Law student at UNSW with a passion for building cool things with code. 
              I love solving problems, whether it's debugging a tricky algorithm, crafting seamless user experiences, 
              or figuring out how tech and law intersect in today’s world (that one is still WIP).
              <br /><br />Right now, I'm diving deep into software engineering—exploring everything from full-stack development to AI. 
              I thrive in environments where I get to learn, collaborate, and create impact with technology.
              <br /><br />When I’m not coding, you’ll probably find me dissecting legal cases, playing around with side projects, 
              or trying to perfect my (non-existent) coffee brewing skills ☕. Always keen to connect with like-minded people, so feel free to reach out!
            </p>
          </section>

          <SeparatorReverse />

          <section className={styles.content1}>
            <h1>Featured Projects</h1>
            <p>Here are some of the projects I'm most proud of 💖. Take a look 👀!</p>
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