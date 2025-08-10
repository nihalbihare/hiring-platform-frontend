import { Avatar, Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import  { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import { useParams } from 'react-router-dom'
import { getProfile } from '../Services/ProfileServices'
import { useMediaQuery } from '@mantine/hooks'

const Profile = (props:any) => {
  const {id} = useParams()
  const[profile , setProfile] = useState<any>({});
  const matches = useMediaQuery('(max-width:475px)')

  useEffect(()=>{
    getProfile(id).then((res)=>{
      setProfile(res)
        console.log("Fetched talent profile:", res);

    }).catch((err)=>{
      console.log(err)
    })
  },[id])
  return (
    <div className='w-2/3 lg-mx:!w-full'>
        <div className='relative'>
            <img className='rounded-t-2xl xl-mx:!h-40 lg-mx:!w-full' src="/banner.jpg" alt="" />
           <div  className=' absolute
                       -bottom-1/3 left-3 flex items-center justify-center 
                       !rounded-full md-mx:-bottom-10 sm-mx:-bottom-16 '>
          
                    <Avatar
                      className=' !w-48 !h-48 rounded-full  border-mine-shaft-950 
                    border-8 cursor-pointer  md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!w-32 xs-mx:!h-32'
                      src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="" />
             </div>
             </div>
             <div className='px-3 mt-16'>
             <div className='text-3xl  xs-mx:text-2xl  font-semibold flex justify-between'>{profile?.name}
              </div>
             <div className='flex gap-1  xs-mx:text-base  items-center text-xl'> <IconBriefcase className='h-5 w-5 ' stroke={1.5}/>
              {profile?.jobTitle} &bull; {profile?.company}</div>
             <div className=' flex gap-1  xs-mx:text-base  items-center text-lg text-mine-shaft-400'> 
                <IconMapPin className='h-5 w-5' stroke={1.5}/> {profile.location}
                </div>
                 <div className=' flex gap-1 items-center text-lg text-mine-shaft-400'> 
                <IconBriefcase className='h-5 w-5' stroke={1.5}/>Experience: {profile.totalExp} Years
                </div>
        </div>
        <Divider  my='xl' />
      <div className='px-3'>

        <div className='text-2xl font-semibold mb-3'>About</div>
        <div className='text-sm text-justify text-mine-shaft-300'> {profile.about}</div>
      </div>
      <Divider my='xl'/>
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>Skills</div>
        <div className='flex flex-wrap gap-2'>
          {
            profile?.skills?.map((skill:any , index:any)=> <div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400
            px-3 py-1'> {skill} </div>)
          }
          
        </div>
      </div>
      <Divider my='xl'/>
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5'>Experience</div>
     <div className='flex flex-col gap-8'> 
       {
       profile?.experience?.map((exp:any , index:any)=><ExpCard key={index} {...exp}/>)
       }
      </div>
        </div>
        <div className='px-3'>
        <Divider my='xl'/>
        <div className='text-2xl font-semibold mb-5'>Certifications</div>
        <div className='flex flex-col gap-8'> {
       profile?.certification?.map((certi:any , index:any)=><CertiCard key={index} {...certi}/>)
       }
        </div>
      </div>
    </div>
  )
}

export default Profile
