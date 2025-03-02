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
      <img className='bg-cover' src={icon}/>
      <div className='text-center absolute top-2/3 pb-2'>
        <h1 className='text-2xl'>{name}</h1>
        {desc}
      </div>
    </Link>
  )
}

export default ProjectFrame;