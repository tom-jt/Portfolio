import React from 'react';
import styles from './LanguageIcon.module.css';
import Link from 'next/link';

interface IconProp {
  icon: any,
  link: string
}

const LanguageIcon = ({ icon, link }: IconProp) => {
  return (
    <Link href={link} className={styles.icon}>
      {icon}
    </Link>
  )
}

export default LanguageIcon;