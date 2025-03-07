import React from 'react';
import { BsHouseFill, BsJoystick, BsLightbulbFill, 
  BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import NavBarIcon from './NavBarIcon';
import NavBarSocial from './NavBarSocial';

export enum Page {
  Home,
  Projects,
  Game
}

export const NavBar = ({ active = Page.Home }: { active: Page }) => {
  return (
    <div className='fixed z-50 flex'>
      <div className='flex flex-col justify-between 
        h-screen w-28 bg-tblack-950 text-twhite-d py-2'>
        <div className='flex flex-col items-start'>
          <NavBarIcon icon={<BsHouseFill size='32' />} text='Home' link='/' 
          active={active == Page.Home}/>
          <NavBarIcon icon={<BsLightbulbFill size='32' />} text='Projects' 
            link='/projects' active={active == Page.Projects} />
          <NavBarIcon icon={<BsJoystick size='32' />} text='Game' 
            link='/game' active={active == Page.Game} />
        </div>

        <div className='mx-auto flex flex-col gap-4 w-8 items-center
          my-4'>
          <NavBarSocial icon={<BsInstagram size='32' />} 
            link='https://www.instagram.com/tom.liu.jt' />
          <NavBarSocial icon={<BsFacebook size='32' />} 
            link='https://www.facebook.com/profile.php?id=100089795907381' />
          <NavBarSocial icon={<BsLinkedin size='32' />} 
            link='https://www.linkedin.com/in/tom-liu-b0957b34a' />
        </div>

      </div>
      <div className='bg-gradient-to-r from-tblack-950/50 to-tblack-950/0 w-4'/>
    </div>
  );
};