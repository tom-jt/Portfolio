import React from 'react';
import styles from './ProjectFrame.module.css';
import Link from 'next/link';
import { getProject } from '@/app/projects/[projectid]/page';

interface ProjectFrameProp {
  id: string
}

const ProjectFrame = ({ id }: ProjectFrameProp) => {
  const p = getProject(id);

  if (!p) {
    return null;
  }

  return (
    <Link href={'/projects/' + id} className={styles.frame}>
      <img className='object-cover' src={p.img}/>
      <div className='text-center absolute bottom-2 py-4 w-11/12 bg-tblack-900/60 rounded-3xl'>
        <h1 className='text-2xl'>{p.name}</h1>
        {p.desc}
      </div>
    </Link>
  )
}

export default ProjectFrame;