import React from 'react';
import styles from './NavBarIcon.module.css'
import Link from 'next/link';

interface IconProp {
  icon: any,
  text?: string,
  link: string
}

const NavBarIcon = ({ icon, text = 'Tooltip 💡', link }: IconProp) => {
  return (
    <Link href={link} className={styles.icon + ' group'}>
      {icon}
      <span className={styles.tooltip + ' group-hover:scale-100'}>
        {text}
      </span>
    </Link>
  )
}

export default NavBarIcon;