import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconAdjustments, IconBookmark, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/Data'
//@ts-ignore
import DOMPurify from 'dompurify'

const JobDesc = (props:any) => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className='w-2/3'>
       <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className=' p-3 bg-mine-shaft-800 rounded-xl' >
                    <img className='h-14' src={`Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-2xl'>Software Engineer </div>
                    <div className='text-lg text-mine-shaft-300'>Google &bull; 3 days ago &bull; 23 Applicants</div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Link to='/apply-job'>
             <Button  variant='light' size='sm' color='bright-sun.4'>{props.edit?"Edit":"Apply"}</Button>
             </Link>
           {props.edit?<Button  variant='outline' size='sm' color='red.5'>Delete</Button> :<IconBookmark className='text-bright-sun-400  cursor-pointer'/>}
           </div>
        </div>
        <Divider my='xl'/>
        <div className='flex justify-between'>
          {
            card.map((item:any, index :any)=><div key={index} className='flex flex-col items-center gap-1'>
            <ActionIcon className='!h-12 !w-12' color='bright-sun.4' variant="light"  radius="xl" aria-label="Settings">
          <IconMapPin className='h-4/5 w-4/5' stroke={1.5} />
        </ActionIcon>
        <div className='text-sm text-mine-shaft-300'>{item.name}</div>
        <div className='font-semibold'>{item.value}</div>
        </div> )

}
          </div>
          <Divider my='xl' />
          <div>
            <div className='text-xl font-semibold mb-5 my-6'>Required Skills</div>
            <div className='flex flex-wrap gap-2'>
              {
                skills.map((item, index)=> < ActionIcon key={index} className='!h-fit !w-fit !text-sm font-medium'
                color='bright-sun.4' p='xs' variant="light"  radius="xl" aria-label="Settings">
            {item}
           </ActionIcon>)
              }
           
            </div>
          </div>
          <Divider my='xl' />
          <div className='[&_h4]:text-xl [&_*]: text-mine-shaft-300 mb-1 [&_h4]:my-5 [&_h4]:font-semibold
           [&_h4]:text-mine-shaft-200 [&_p]: text-justify' dangerouslySetInnerHTML={{__html:data}}>
          </div>
          <Divider my='xl'/>
          <div>
           <div className='text-xl font-semibold mb-5'>About Company</div>
           <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className=' p-3 bg-mine-shaft-800 rounded-xl' >
                    <img className='h-8' src={`Icons/Google.png`} alt="" />
                </div>
                <div className='flex flex-col'>
                    <div className='font-medium text-lg'>Google </div>
                    <div className=' text-mine-shaft-300'>10k+ Employees</div>
                </div>
            </div>
            <div className='flex flex-col items-center '>
                <Link to='/company'>
             <Button  variant='light' size='sm' color='bright-sun.4'>Company Page</Button>
             </Link>
           </div>
        </div>
        <div className='text-mine-shaft-300 text-justify mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus assumenda libero saepe qui facere magnam dolores adipisci non temporibus id ullam blanditiis tempore quas fuga nemo enim culpa esse, ea aut ab iure? Porro facere illum, magnam omnis tempore molestias.</div>
          </div>
         
    </div>
  )
}

export default JobDesc
