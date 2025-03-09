import React from 'react';
import styles from './LanguageIcon.module.css';
import Link from 'next/link';

interface IconProp {
  icon: any,
  link: string,
  desc: string
}

const LanguageIcon = ({ icon, link, desc }: IconProp) => {
  return (
    <Link href={link} className={styles.icon}>
      {icon}
      <div className='absolute w-full h-full -bottom-8 flex items-center justify-center'>
        <div className={styles.desc}>{desc}</div>
      </div>
    </Link>
  )
}

export default LanguageIcon;