import { Button} from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { IconArrowLeft } from '@tabler/icons-react'
import Profile from '../TalentProfile/Profile'
import Recommended from '../TalentProfile/Recommended'
import { useEffect, useState } from 'react'
import { getAllProfiles } from '../Services/ProfileServices'

const TalentProfile = () => {
  const navigate =useNavigate()
  const[talent , setTalent] = useState<any[]>([])
  useEffect (()=>{
    getAllProfiles().then((res)=>{
      setTalent(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
        <Link to='/find-talent' className='my-4 inline-block'>
        <Button  onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} my='sm' variant='light' color='bright-sun.4'>Back</Button>
        </Link>
        <div className='flex gap-5 lg-mx:flex-wrap '>
            <Profile/>
            <div className='mx-8 '>
            <Recommended talents = {talent} />
            </div>
        </div>
       
      
    </div>
  )
}

export default TalentProfile;
