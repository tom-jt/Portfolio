import React from 'react';
import { NavBar, Page } from '@/app/components/NavBar';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import * as data from '@/data/dataFetch';
import BorderedImage from '@/app/components/BorderedImage';

const langTagsLookup: any = {
  'Java': 'bg-tyellow-900',
  'HTML/CSS': 'bg-tgreen-800',
  'C#': 'bg-tpink-700',
  'Tailwind': 'bg-tblue-600',
  'JavaScript': 'bg-tyellow-700',
  'TypeScript': 'bg-cyan-700',
  'Next.JS': 'bg-red-700',
  'React': 'bg-orange-600',
  'Unity': 'bg-slate-500',
  'Gradle': 'bg-tblue-700',
  'Mirror': 'bg-tblack-950',
  'Bootstrap': 'bg-purple-600'
}

async function Project({ params }: {
  params: Promise<{ projectId: string }>
}) {
  const projectId = (await params).projectId;
  const p: data.ProjectProp | undefined = data.getProject(projectId);

  if (!p) {
    return notFound();
  }

  const langs = [... new Set(p.langs)];
  const langTags: React.JSX.Element[] = [];
  for (let i = 0; i < langs.length; i++) {
    const l = langs[i];
    const col = (langTagsLookup as any)[l];

    if (col === undefined) {
      continue;
    }

    langTags.push(<div key={l} className={col}>{l}</div>);
  }
  
  return (
    <main className='flex w-full'>
      <NavBar active={Page.Projects} />
      
      <div className='bgMix h-screen flex items-center px-16 gap-16'>
        <div className='w-1/2 flex items-center'>
          <BorderedImage src={p.img} />
        </div>

        <div className='w-1/2 h-2/3 flex flex-col gap-4'>
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
            <Link href='/projects' className={styles.fancyButton + ' ' + styles.redButton}>
              <h1>
                Back to Projects
              </h1>
            </Link>

            <Link href={p.link} className={styles.fancyButton + ' ' + styles.tealButton}>
              <h1>
                Take Me There!
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;