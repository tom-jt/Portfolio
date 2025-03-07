import React from 'react';
import styles from './NavBarIcon.module.css'
import Link from 'next/link';

interface IconProp {
  icon: any,
  text?: string,
  link: string,
  active: boolean
}

const NavBarIcon = ({ icon, text = 'Tooltip', link, active }: IconProp) => {
  return (
    <Link href={link} className={styles.iconBase + ' ' +
      (active ? styles.iconActive : '')}>
      {icon}
      <div>
        {text}
      </div>
    </Link>
  )
}

export default NavBarIcon;