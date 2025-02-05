import React from 'react';
import styles from './page.module.css';
import NavBar from './components/NavBar';
import ProjectFrame from './components/ProjectFrame';

const Home = () => {
  return (
    <main>
      <NavBar />
      <div className='pl-28 bg-teal-600'>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            Hey There,<br />I'm Tom.
          </h1>
        </div>

        <div className={styles.separator} />

        <div className={styles.content}>
          <section className={styles.content2}>
            <h1>Who Am I? 🤔</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section className={styles.content1}>
            <h1>Featured Projects 💻</h1>
            <div className={styles.projectFrames}>
              <ProjectFrame icon='/image/background.jpg' name='Test Project' desc='Test Project Desc'/>
              <ProjectFrame icon='/image/background.jpg' name='Test Project 2' desc='Test Project Desc'/>
              <ProjectFrame icon='/image/background.jpg' name='Test Project 3' desc='Test Project Desc'/>
            </div>
          </section>

          <section className={styles.content2}>
            <h1>Nice Curves</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section className={styles.content1}>
            <h1>Socials 🍻</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

        </div>
      </div>


    </main>
  );
};

export default Home;