import React from 'react';
import styles from './NavBarSocial.module.css';

interface SocialProp {
  icon: any,
  link: string,
}

const NavBarSocial = ({ icon, link }: SocialProp) => {
  return (
    <a href={link} className={styles.icon}>
      {icon}
    </a>
  )
}

export default NavBarSocial;