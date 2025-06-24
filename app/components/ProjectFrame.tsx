import React from 'react';
import styles from './ProjectFrame.module.css';
import Link from 'next/link';
import * as data from '@/data/dataFetch';
import BorderedImage from './BorderedImage';

interface ProjectFrameProp {
  id: string
}

const ProjectFrame = ({ id }: ProjectFrameProp) => {
  const p: data.ProjectProp | undefined = data.getProject(id);

  if (!p) {
    return null;
  }

  return (
    <Link href={'/projects/' + id} className={styles.projectFrame}>
      <BorderedImage src={p.img}>
        <div className={styles.textBox}>
          <h1>{p.name}</h1>
          <span>{p.desc}</span>
        </div>
      </BorderedImage>
    </Link>
  )
}

export default ProjectFrame;