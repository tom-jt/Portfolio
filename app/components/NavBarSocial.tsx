import React from 'react';
import styles from './NavBarSocial.module.css';
import Link from 'next/link';

interface SocialProp {
  icon: any,
  link: string,
}

const NavBarSocial = ({ icon, link }: SocialProp) => {
  return (
    <Link href={link} className={styles.icon}>
      {icon}
    </Link>
  )
}

export default NavBarSocial;