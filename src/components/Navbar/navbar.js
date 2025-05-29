import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import ComputerIcon from '@mui/icons-material/Computer';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li>
              <NavLink to ="/"><HomeIcon className='icon'/></NavLink>
            </li>
            <li>
              <NavLink to ="/experience"><WorkIcon className='icon'/></NavLink>
            </li>
            <li>
              <NavLink to ="/project"><ComputerIcon className='icon'/></NavLink>
            </li>
        </ul>
    </div>

  )
}

export default Navbar
