import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';
import style from './page.module.css';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Game} />
      <div className={style.bgBlack + ' absolute pl-28 dynamicHeader w-full h-full flex items-center justify-center'}>
        <h1>Coming Soon!</h1>
      </div>
    </main>
  );
};

export default Home;