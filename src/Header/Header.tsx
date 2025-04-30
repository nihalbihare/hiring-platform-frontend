import React from 'react'
import { IconAtom } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar,Button,Indicator } from '@mantine/core';
import avatar from '../assets/avatar.png'
import NavLinks from './NavLinks';
import { Link, useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation()
  const user = useSelector((state:any)=>state.user)
  return (
    location.pathname !== "/sign-up" && location.pathname !== "/login" ? <div className='w-full bg bg-mine-shaft-950 px-6 text-white h-20 flex 
     justify-between items-center font-["poppins"]'>
        <div className='flex gap-1 items-center text-bright-sun-400'>
        <IconAtom className='h-10 w-10' stroke={1.5} />
          <div className='text-3xl font-semibold'>hiring platfrom</div>
            </div>
         <div className='flex gap-4 '>
            <NavLinks/>
        </div>
        
        <div className='flex gap-3 items-center'>
            {user?<ProfileMenu/>:<Link to="/login">
            <Button variant='subtle' color='bright-sun.4'>Login</Button>
            </Link>}
           
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
            <Indicator color="bright-sun.4" offset={6} size={6} radius="lg" processing>
        <IconBell stroke={1.25} />
        </Indicator>
        </div>

        </div>
      
    </div>:<></>
  )
}

export default Header;
