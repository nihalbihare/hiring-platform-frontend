import { Button, Divider } from '@mantine/core'
import React from 'react'
import Profile from '../Profile/Profile'
import { Link } from 'react-router-dom'
import { IconArrowLeft } from '@tabler/icons-react'
import { profile } from '../Data/Data'


const ProfilePage = () => {
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
    <Link to='/find-talent' className='my-4 inline-block'>
    <Button leftSection={<IconArrowLeft size={20}/>} variant='light' color='bright-sun.4'>Back</Button>
    </Link>
    <div className='flex gap-5'>
        <Profile {...profile}/>
        <div className='mx-8 '>
        </div>
    </div>
    </div>
  )
}

export default ProfilePage
