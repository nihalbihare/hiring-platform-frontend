import React, { useEffect } from 'react'
import { IconAtom, IconX } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import {Burger, Button,Drawer,Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../Services/ProfileServices';
import { setProfile } from '../Slices/ProfileSlice';
import NotificationMenu from './NotificationMenu';
import { setupResponseInterceptor } from '../Inceptor/AxiosInceptor';
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../Slices/UserSlice';
import { useDisclosure } from '@mantine/hooks';



const links = [
    { name: 'find Jobs', url: 'find-jobs' },
    { name: 'find Talent', url: 'find-talent' },
    { name: 'post Jobs', url: 'post-jobs/0' },
    { name: 'Posted Jobs', url: 'posted-jobs/0' },
    { name: 'Job History', url: 'job-history' },
    // { name: 'Sign Up', url: 'sign-up' }
  ];
const Header = () => {
  const location = useLocation()
   const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch()
  const user = useSelector((state:any)=>state.user)
  const token = useSelector((state:any)=>state.jwt)
  const navigate = useNavigate()
 useEffect(() => {
  setupResponseInterceptor(navigate)
}, [navigate]);

useEffect(() => {
  if (token !== "") {
    if (localStorage.getItem("token") !== "") {
      const decoded = jwtDecode(localStorage.getItem("token") || "");
      dispatch(setUser({ ...decoded, email: decoded.sub }));
    }
  }

  if (user?.profileId) {
    getProfile(user.profileId)
      .then((res) => {
        dispatch(setProfile(res));
      })
      .catch((err) => console.log(err));
  }
}, [token, navigate]);



  return (
    location.pathname !== "/sign-up" && location.pathname !== "/login" ? <div className='w-full bg bg-mine-shaft-950 px-6 text-white h-20 flex 
     justify-between items-center font-["poppins"]'>
        <div className='flex gap-1 items-center text-bright-sun-400'>
        <IconAtom className='h-10 w-10' stroke={1.5} />
          <div className='text-3xl xs-mx:hidden font-semibold'>hiring platfrom</div>
            </div>
         <div className='flex gap-4 '>
            <NavLinks/>
        </div>
        
        <div className='flex gap-3 items-center'>
            {user?<ProfileMenu/>:<Link to="/login">
            <Button variant='subtle' color='bright-sun.4'>Login</Button>
            </Link>}
            {
              user?<NotificationMenu/>:<></>
            }
           
       <Burger className='bs:hidden'  opened={opened} onClick={open} aria-label="Toggle navigation" />     
 <Drawer size='xs'  overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} 
 position='right' opened={opened} closeButtonProps={{
          icon: <IconX size={35}  />,
        }}  onClose={close} >
        {/* Drawer content */}
        <div className='flex flex-col gap-5 items-center'>
        {links.map((link, index) => (
        
                <div
                  key={index}
                  className='h-full flex items-center'
                >
                  <Link to={`/${link.url}`} className='px-2 text-xl hover:text-bright-sun-400'>
                    {link.name}
                  </Link>
                </div>
              ))}
              </div>
      </Drawer>
      
        </div>
      
    </div>:<></>
  )
}

export default Header;
