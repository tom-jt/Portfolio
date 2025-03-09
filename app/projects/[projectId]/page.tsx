import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';
import projectsJson from '@/data/projects.json';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

export interface ProjectProp {
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
  'C#': 'bg-tpink-700',
  'Tailwind': 'bg-purple-600',
  'JavaScript': 'bg-tyellow-700',
  'TypeScript': 'bg-cyan-700',
  'Next.JS': 'bg-red-700',
  'React': 'bg-orange-600',
  'Unity': 'bg-slate-500'
}

const projects = projectsJson.projects as ProjectProp[];

export function getProject(id: string): ProjectProp | undefined {
  return projects.find(e => e.id == id);
}

async function Home({ params }: {
  params: Promise<{ projectid: string }>
}) {
  const projectId = (await params).projectid;
  const p = getProject(projectId);

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
      <div className={styles.bgBlack + ' pl-28 flex w-full h-full absolute gap-14'}>
        <div className='w-1/2 pl-14 my-auto'>
          <img src={p.img} alt='Project Image' className='object-contain rounded-2xl' />
        </div>
        <div className='pr-14 w-1/2 flex my-48'>
          <div className='w-full h-full flex flex-col gap-4 justify-between'>
            <div className='dynamicHeader'>
              <h1>
                {p.name}
                <div className='bg-twhite-d h-1 rounded' />
              </h1>
            </div>
            <div className={styles.langs + ' flex flex-row gap-4'}>
              {langTags}
            </div>

            <div className='flex-grow'>
              {p.desc}
            </div>

            <div className='flex justify-between'>
              <button className={styles.fancyButton + ' group ' + styles.redButton} role="button">
                <h1 className='bg-tblack-d px-4 py-4 rounded-md w-full text-xl
                  h-full transition-all duration-300 group-hover:bg-transparent'>
                  <Link href='/projects'>Back to Projects</Link>
                </h1>
              </button>

              <button className={styles.fancyButton + ' group ' + styles.tealButton} role="button">
                <h1 className='bg-tblack-d px-4 py-4 rounded-md w-full text-xl
                  h-full transition-all duration-300 group-hover:bg-transparent'>
                  <Link href={p.link}>Take Me There!</Link>
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