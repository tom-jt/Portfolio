import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';

const Home = () => {
  return (
    <main>
      <NavBar active={Page.Game} />
      <div className={'bgMix absolute pl-28 dynamicHeader w-full h-full flex items-center justify-center'}>
        <h1>Coming Soon!</h1>
      </div>
    </main>
  );
};

export default Home;