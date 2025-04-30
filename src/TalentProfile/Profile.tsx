import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import Recommended from './Recommended'

const Profile = (props:any) => {
  return (
    <div className='w-2/3'>
        <div className='relative'>
            <img className='rounded-t-2xl' src="/banner.jpg" alt="" />
            <img className='rounded-full w-48 h-48 absolute
             -bottom-1/3 left-3 border-mine-shaft-950 border-8' src=" /avatar.png" alt="" />
             </div>
             <div className='px-3 mt-16'>
             <div className='text-3xl font-semibold flex justify-between'>{props.name} 
              <Button color='bright-sun.4' variant="light">Message</Button></div>
             <div className='flex gap-1 items-center text-xl'> <IconBriefcase className='h-5 w-5 ' stroke={1.5}/>
              {props.role} &bull; {props.company}</div>
             <div className=' flex gap-1 items-center text-lg text-mine-shaft-400'> 
                <IconMapPin className='h-5 w-5' stroke={1.5}/> {props.location}
                </div>
        </div>
        <Divider  my='xl' />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>About</div>
        <div className='text-sm text-justify text-mine-shaft-300'> {props.about}</div>
      </div>
      <Divider my='xl'/>
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>Skills</div>
        <div className='flex flex-wrap gap-2'>
          {
            props.skills.map((skill:any , index:any)=> <div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400
            px-3 py-1'> {skill} </div>)
          }
          
        </div>
      </div>
      <Divider my='xl'/>
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5'>Experience</div>
     <div className='flex flex-col gap-8'> 
       {
       props.experience.map((exp:any , index:any)=><ExpCard key={index} {...exp}/>)
       }
      </div>
        </div>
        <div className='px-3'>
        <Divider my='xl'/>
        <div className='text-2xl font-semibold mb-5'>Certifications</div>
        <div className='flex flex-col gap-8'> {
       props.certifications.map((certi:any , index:any)=><CertiCard key={index} {...certi}/>)
       }
        </div>
      </div>
    </div>
  )
}

export default Profile
