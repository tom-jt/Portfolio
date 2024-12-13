import React from 'react';
import { BsHouseFill, BsJoystick, BsLightbulbFill } from 'react-icons/bs';
import NavBarIcon from './NavBarIcon';

const NavBar = () => {
  return (
    <div className='fixed z-50'
    >
      <div className='relative top-0 left-0 h-screen w-28 m-0 
        flex flex-col
        bg-tblack-950 text-twhite-d shadow-lg'
      >
        <NavBarIcon icon={<BsHouseFill size='32' />} text='Home ❤️' />
        <NavBarIcon icon={<BsJoystick size='32' />} text='Clicker Game 🎮' />
        <NavBarIcon icon={<BsLightbulbFill size='32' />} text='My Projects 📝' />
      </div>
    </div>
  );
};

export default NavBar;