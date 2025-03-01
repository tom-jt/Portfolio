import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';

interface ProjectProp {

}

async function Home({ params }: {
  params: Promise<{ projectid: string }>
}) {
  const projectId = (await params).projectid;
  return (
    <main>
      <NavBar active={Page.Projects} />
      <div className='pl-28'>
        Project: {projectId}
      </div>
    </main>
  );
};

export default Home;