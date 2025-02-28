import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from './components/NavBar';
import ProjectFrame from './components/ProjectFrame';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Home} />
      <div className='pl-28 bg-teal-600 relative'>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            Hey There,<br />I'm Tom.
          </h1>
        </div>


        <div className={styles.content}>
          <section className={styles.content2}>
            <h1>Who Am I? 🤔</h1>
            <p>👋 Hey there! I’m a Computer Science & Law student at UNSW with a passion for building cool things with code. 
              I love solving problems, whether it's debugging a tricky algorithm, crafting seamless user experiences, 
              or figuring out how tech and law intersect in today’s world (that one is still WIP).
              <br /><br />Right now, I'm diving deep into software engineering—exploring everything from full-stack development to AI. 
              I thrive in environments where I get to learn, collaborate, and create impact with technology.
              <br /><br />When I’m not coding, you’ll probably find me dissecting legal cases, playing around with side projects, 
              or trying to perfect my (non-existent) coffee brewing skills ☕. Always keen to connect with like-minded people, so feel free to reach out!
            </p>
          </section>

          <section className={styles.content1}>
            <h1>Featured Projects 💻</h1>
            <div className={styles.projectFrames}>
              <ProjectFrame icon='/image/background.jpg' name='Linguae Legend' desc='Wordle-inspired puzzle game infused with fantasy elements' id='linguae-legend'/>
              <ProjectFrame icon='/image/background2.jpg' name='Con Grazia' desc='Endless shooter game that comes with slimes in many flavours' id='con-grazia'/>
              <ProjectFrame icon='/image/background.jpg' name='xChange' desc='Web-based University exchange program browser' id='xchange'/>
            </div>
          </section>

          <section className={styles.content2}>
            <h1>Nice Curves</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section className={styles.content1}>
            <h1>Socials 🍻</h1>
            <div className={styles.socials}>
              <BsInstagram size='64' />
              <BsFacebook size='64' />
              <BsLinkedin size='64' />
            </div>
          </section>

        </div>
      </div>


    </main>
  );
};

export default Home;