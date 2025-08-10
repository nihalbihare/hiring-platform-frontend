import React from 'react';
import boy from '../assets/Boy.png';
import { TextInput,Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import avatar from '../assets/avatar.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import google from '../assets/Google.png'

const DreamJob = () => {
  return (
    <div className='flex items-center sm-mx:flex-col-reverse px-16 bs-mx:px-10 md-mx:px-5'>
      <div className='flex flex-col w-[45%] sm-mx:w-full gap-3'>
        <div className='text-6xl font-bold leading-tight text-mine-shaft-100 bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl
         [&>span]:text-bright-sun-400' >Find your<span> dream</span> <span>job</span> with us</div>
        <div className='text-lg  md-mx:text-base sm-mx:text-sm text-mine-shaft-200'>Good life begins with a good company. Start exploring thousands of jobs in one place.</div>

        <div className='flex gap-3 items-center'>
        <TextInput className='bg-mine-shaft-900 rounded-lg px-2
         text-mine-shaft-100 [&_input]:text-mine-shaft-100 ' variant="unstyled" label="Job Title" placeholder="Software Engineer"
    />
     <TextInput className='bg-mine-shaft-900 rounded-lg px-2
      text-mine-shaft-100 [&_input]:text-mine-shaft-100 ' variant="unstyled" label="Job Type" placeholder="Full Time"
    />
    <div className='flex items-center justify-center w-20 bg-bright-sun-400
     text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer '>
    <IconSearch stroke={1.25} className='h-[85%] w-[85%]' />

    </div>
    
      </div>
      </div>
   
      <div className='w-[55%] sm-mx:w-full flex items-center justify-center'>
        <div className='w-[30rem] relative'>
          <img src={boy} alt="Job Seeker" />
          <div className='absolute w-fit -right-10 top-[50%] bs-mx:right-0 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md'>
          <div className='text-center text-mine-shaft-100 mb-1 text-sm'>4k+ got job</div>

    <Avatar.Group>
      <Avatar src={avatar}/>
      <Avatar src={avatar1} />
      <Avatar src={avatar2} />
      <Avatar>+3</Avatar>
    </Avatar.Group>
          </div>
          <div className='absolute w-fit -left-5 bs-mx:top-[35%] top-[28%] border-bright-sun-400 
          border rounded-lg p-2 backdrop-blur-md flex flex-col'>
            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 p-1 rounded-lg'>
                <img src={google} alt="" />
              </div>
              <div>
                <div className='text-sm text-mine-shaft-100'>Software Engineer</div>
                <div className='text-mine-shaft-200 text-xs'>New York</div>
              </div>

            </div>
            <div className='flex gap-2 justify-around text-mine-shaft-200 text-xs'>
              <span>1 day ago</span>
                <span> 120 application</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamJob;
