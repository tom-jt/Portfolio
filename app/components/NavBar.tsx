import React from 'react';
import { BsHouseFill, BsJoystick, BsLightbulbFill } from 'react-icons/bs';
import NavBarIcon from './NavBarIcon';

export enum Page {
  Home,
  Projects,
  Game
}

export const NavBar = ({ active = Page.Home }: { active: Page }) => {
  return (
    <div className='fixed z-50'
    >
      <div className='relative top-0 left-0 h-screen w-28 m-0 
        flex flex-col
        bg-tblack-950 text-twhite-d shadow-2xl'
      >
        <NavBarIcon icon={<BsHouseFill size='32' />} text='Home ❤️' link='/' 
          active={active == Page.Home}/>
        <NavBarIcon icon={<BsLightbulbFill size='32' />} text='My Projects 📝' 
          link='/projects' active={active == Page.Projects} />
        <NavBarIcon icon={<BsJoystick size='32' />} text='Clicker Game 🎮' 
          link='/game' active={active == Page.Game} />
      </div>
    </div>
  );
};