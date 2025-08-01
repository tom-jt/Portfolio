import React from 'react';
import { PageType } from '@/app/components/NavBar';
import styles from './page.module.css';
import Link from 'next/link';
import * as data from '@/data/dataFetch';
import BorderedImage from '@/app/components/BorderedImage';
import Page from '@/app/components/Page';

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
  params: Promise<{ projectid: string }>
}) {
  const projectId = (await params).projectid;
  const p: data.ProjectProp | undefined = data.getProject(projectId);

  if (!p) {
    return (<p>{projectId}</p>);
  }

  const langs = [... new Set(p.langs)];
  const langTags: React.JSX.Element[] = [];
  for (let i = 0; i < langs.length; i++) {
    const l = langs[i];
    const col = (langTagsLookup as any)[l];

    if (col === undefined) {
      continue;
    }

    langTags.push(<div key={l} className={col + 
      ' rounded-full shadow-md px-3 text-nowrap'
    }>{l}</div>);
  }
  
  return (
    <Page activePage={PageType.Projects}>
      <div className='bgMix h-screen flex items-center px-16 gap-16'>
        <div className='w-1/2'>
          <BorderedImage src={p.img} />
        </div>

        <div className='w-1/2 h-2/3 flex flex-col gap-4'>
          <div className='dynamicHeader'>
            <h1>
              {p.name}
              <div className='bgTeal h-1 rounded' />
            </h1>
          </div>
          
          <div className='flex flex-wrap gap-4'>
            {langTags}
          </div>

          <div className='flex-grow'>
            {p.desc}
          </div>

          <div className='flex justify-between'>
            <Link href='/projects' className={styles.fancyButton + ' ' + styles.redButton}>
              <p>
                Back to Projects
              </p>
            </Link>

            <Link href={p.link} className={styles.fancyButton + ' ' + styles.tealButton}>
              <p>
                Take Me There!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Project;