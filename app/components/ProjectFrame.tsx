import React from 'react';
import styles from './ProjectFrame.module.css';
import Link from 'next/link';
import * as data from '@/data/dataFetch';
import Image from 'next/image';

interface ProjectFrameProp {
  id: string
}

const ProjectFrame = ({ id }: ProjectFrameProp) => {
  const p: data.ProjectProp | undefined = data.getProject(id);

  if (!p) {
    return null;
  }

  return (
    <Link href={'/projects/' + id} className={styles.frame}>
      <Image className='object-cover' alt='Thumbnail' src={p.img} width='1920' height='1080' />
      <div className={styles.textBox}>
        <h1>{p.name}</h1>
        <span className='w-96'>{p.desc}</span>
      </div>
    </Link>
  )
}

export default ProjectFrame;