import { Button, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconArrowLeft } from '@tabler/icons-react'
import Profile from '../TalentProfile/Profile'
import { profile } from '../Data/Data'
import Recommended from '../TalentProfile/Recommended'

const TalentProfile = () => {
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
        <Link to='/find-talent' className='my-4 inline-block'>
        <Button leftSection={<IconArrowLeft size={20}/>} variant='light' color='bright-sun.4'>Back</Button>
        </Link>
        <div className='flex gap-5'>
            <Profile {...profile}/>
            <div className='mx-8 '>
            <Recommended/>
            </div>
        </div>
       
      
    </div>
  )
}

export default TalentProfile;
