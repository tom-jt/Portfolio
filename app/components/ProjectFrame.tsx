import React from 'react';
import styles from './ProjectFrame.module.css';
import Link from 'next/link';

interface ProjectProp {
  icon: any,
  name: string,
  desc?: string,
  id: string
}

const ProjectFrame = ({ icon, name = 'Example Project', desc = 'Example Project Description', id }: ProjectProp) => {
  return (
    <Link href={'/projects/' + id} className={styles.frame}>
      <img className={styles.img} src={icon}/>
      <span className={styles.desc}>
        <h1>{name}</h1>
        <p>{desc}</p>
      </span>
    </Link>
  )
}

export default ProjectFrame;