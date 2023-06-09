import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const connectWallet = async() =>{
    if(typeof window.ethereum !=="undefined"){
      await window.ethereum.request({method:"eth_requestAccounts"});
      document.getElementById("connectButton").innerHTML = "Metamask Connected!";
      console.log("You are connected!");
   }else{
       document.getElementById("connectButton").innerHTML = "Please install the metamask!";
   }
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* <h1 className='text-pink-400'>Ticket Event Management</h1> */}
        <img src={Logo} alt='Logo Image' style={{ width: '130px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        {/* <li>
          <a href='/skills'>Skills</a>
        </li> */}
        <li>
          <a href='/work'>Work</a>
        </li>
        <li>
          <a href='/registration'>Registration</a>
        </li>
       
          <button id="connectButton" onClick={connectWallet}>Connect Metamask</button>
       
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/about'>About</a>  
        </li>
        {/* <li className='py-6 text-4xl'>
          <a href='/skills'>Skills</a>  
        </li> */}
        <li className='py-6 text-4xl'>
          <a href='/work'>Work</a> 
        </li>
        <li className='py-6 text-4xl'>
          <a href='/registration'>Registration</a> 
        </li>
      </ul>

     
    </div>
  );
};

export default Navbar;
