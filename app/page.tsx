import React from 'react';
import styles from './page.module.css';
import NavBar from './components/NavBar';

const Home = () => {
  return (
    <main>
      <NavBar />
      <div className='pl-28 bg-teal-600'>
        <div className={styles.title}>
          <div className='bg-twhite-d w-3 my-8' />
          <div className={styles.titleText}>HI<br />I'M TOM</div>
        </div>

        <div className={styles.separator} />

        <div className={styles.content}>
          <section className={styles.content2}>
            <h1>Who I Am</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section className={styles.content1}>
            <h1>Featured Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section className={styles.content2}>
            <h1>Nice Curves</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section className={styles.content1}>
            <h1>Socials</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

        </div>
      </div>


    </main>
  );
};

export default Home;