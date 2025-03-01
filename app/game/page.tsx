import React from 'react';
import styles from './page.module.css';
import { NavBar, Page } from '@/app/components/NavBar';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Game} />
      <div className='pl-28 bg-teal-600'>

      </div>


    </main>
  );
};

export default Home;