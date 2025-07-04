import React from 'react';
import { BsHouseFill, BsJoystick, BsLightbulbFill, 
  BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import NavBarIcon from './NavBarIcon';
import NavBarSocial from './NavBarSocial';

export enum PageType {
  Home,
  Projects,
  Game
}

export const NavBar = ({ active = PageType.Home }: { active: PageType }) => {
  return (
    <div className='md:min-w-28'>
      <div className='fixed z-50 flex
        max-md:w-screen md:h-screen max-md:flex-col max-md:bottom-0'>
        <div className='bg-gradient-to-t from-tblack-950/50 to-tblack-950/0
          h-4 md:hidden' />

        <div className='flex justify-between bg-tblack-950
          md:w-28 max-md:w-screen md:py-2 max-md:px-2 md:flex-col'>
          <div className='flex pl-4 md:gap-2 md:flex-col'>
            <NavBarIcon icon={<BsHouseFill size='32' />} text='Home' link='/' 
              active={active == PageType.Home}/>
            <NavBarIcon icon={<BsLightbulbFill size='32' />} text='Projects' 
              link='/projects' active={active == PageType.Projects} />
            <NavBarIcon icon={<BsJoystick size='32' />} text='Game' 
              link='/game' active={active == PageType.Game} />
          </div>

          <div className='flex gap-4 justify-center items-center
            md:py-2 max-md:px-2 md:flex-col'>
            <NavBarSocial icon={<BsGithub size='32' />} 
              link='https://github.com/tom-jt' />
            <NavBarSocial icon={<BsInstagram size='32' />} 
              link='https://www.instagram.com/tom.liu.jt' />
            <NavBarSocial icon={<BsFacebook size='32' />} 
              link='https://www.facebook.com/profile.php?id=100089795907381' />
            <NavBarSocial icon={<BsLinkedin size='32' />} 
              link='https://www.linkedin.com/in/tom-liu-jt' />
          </div>
        </div>

        <div className='bg-gradient-to-r from-tblack-950/50 to-tblack-950/0
          w-4 max-md:hidden' />
      </div>
    </div>
  );
};