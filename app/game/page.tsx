import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';

const Home = () => {
  return (
    <main className='flex w-full h-screen'>
      <NavBar active={Page.Game} />
      <div className={'bgMix flex-grow flex items-center justify-center dynamicHeader'}>
        <h1>Coming Soon!</h1>
      </div>
    </main>
  );
};

export default Home;