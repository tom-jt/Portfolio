import React from 'react';
import { PageType } from '@/app/components/NavBar';
import Page from '../components/Page';

const Home = () => {
  return (
    <Page activePage={PageType.Game}>
      <div className='bgMix h-screen w-full flex items-center justify-center dynamicHeader'>
        <h1>Coming Soon!</h1>
      </div>
    </Page>
  );
};

export default Home;