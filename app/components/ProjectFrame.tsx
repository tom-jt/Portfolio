import React from 'react';
import styles from './ProjectFrame.module.css';
import Link from 'next/link';
import { getProject } from '@/app/projects/\[projectid\]/page';
import Image from 'next/image';

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
      <Image className='object-cover' alt='Thumbnail' src={p.img} width='500' height='281' />
      <div className={styles.textBox}>
        <h1>{p.name}</h1>
        <span className='w-96'>{p.desc}</span>
      </div>
    </Link>
  )
}

export default ProjectFrame;