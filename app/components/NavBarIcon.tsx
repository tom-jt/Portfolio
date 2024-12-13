import React from 'react';
import styles from './NavBarIcon.module.css'

interface IconProp {
  icon: any,
  text?: string
}

const NavBarIcon = ({ icon, text = 'Tooltip 💡' }: IconProp) => {
  return (
    <div className={styles.icon + ' group'}>
      {icon}
      <span className={styles.tooltip + ' group-hover:scale-100'}>
        {text}
      </span>
    </div>
  )
}

export default NavBarIcon;