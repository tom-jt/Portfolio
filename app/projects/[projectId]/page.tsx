import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';
import projectsJson from '@/data/projects.json';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

interface ProjectProp {
  id: string,
  name: string,
  desc: string,
  img: string,
  langs: string[],
  link: string
}

const langTagsLookup = {
  'Java': 'bg-tyellow-900',
  'HTML/CSS': 'bg-tgreen-800',
  'C#': 'bg-tpink-800',
  'Tailwind': 'bg-tblue-800',
  'JavaScript/TypeScript': 'bg-tyellow-700',
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

  const langs = [... new Set(p.langs)];
  const langTags = [];
  for (var i = 0; i < langs.length; i++) {
    const l = langs[i];
    const col = (langTagsLookup as any)[l];

    if (col === undefined) {
      continue;
    }

    langTags.push(<div key={l} className={col}>{l}</div>);
  }
  
  return (
    <main>
      <NavBar active={Page.Projects} />
      <div className='pl-28 flex h-full absolute'>
        <div className='w-1/2 flex p-14'>
          <img src={p.img} alt='Project Image' className='m-auto' />
        </div>
        <div className='w-1/2 flex'>
          <div className='m-auto w-full h-1/2 flex flex-col gap-4 justify-between'>
            <h1>
              {p.name}
              <div className='bg-twhite-d h-1 rounded mr-14' />
            </h1>

            <div className={styles.langs + ' flex flex-row gap-4'}>
              {langTags}
            </div>

            <div className='flex-grow'>
              {p.desc}
            </div>

            <div className='mr-14 flex justify-between'>
              <button className={styles.fancyButton + ' group ' + styles.redButton} role="button">
                <h1 className='bg-tblack-d px-4 py-4 rounded-md w-full text-xl
                  h-full transition-all duration-300 group-hover:bg-transparent'>
                  <Link href='/projects'>Back to Projects</Link>
                </h1>
              </button>

              <button className={styles.fancyButton + ' group ' + styles.tealButton} role="button">
                <h1 className='bg-tblack-d px-4 py-4 rounded-md w-full text-xl
                  h-full transition-all duration-300 group-hover:bg-transparent'>
                  <a href={p.link}>Take Me There!</a>
                </h1>
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;