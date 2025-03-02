import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';
import projectsJson from '@/data/projects.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProjectProp {
  id: string,
  name: string,
  desc: string,
  img: string,
  langs: string[]
}

const projects = projectsJson.projects as ProjectProp[];

async function Home({ params }: {
  params: Promise<{ projectid: string }>
}) {
  const projectId = (await params).projectid;
  const p = projects.find(e => e.id == projectId);

  if (!p) {
    return notFound();
  }
  
  return (
    <main>
      <NavBar active={Page.Projects} />
      <div className='pl-28 flex h-full absolute'>
        <div className='w-1/2 bg-tpink-d text-center'>
          <img src="/image/background.jpg" alt="Project Image" />
        </div>
        <div className='w-1/2 bg-tgreen-d'>
          Bye
        </div>
      </div>
    </main>
  );
};

export default Home;