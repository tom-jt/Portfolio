import React from 'react';
import styles from './ProjectFrame.module.css'

interface ProjectProp {
  icon: any,
  name: string
  desc?: string
}

const ProjectFrame = ({ icon, name = 'Example Project', desc = 'Example Project Description' }: ProjectProp) => {
  return (
    <a className={styles.frame}>
      <img className={styles.img} src={icon}/>
      <span className={styles.desc}>
        <h1>{name}</h1>
        <p>{desc}</p>
      </span>
    </a>
  )
}

export default ProjectFrame;