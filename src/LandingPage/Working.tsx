import React from 'react'
import { work } from '../Data/Data'
import { Avatar } from '@mantine/core'
import avatar1 from '../assets/avatar1.png'

const Working = () => {
  return (
    <div>
       <div className='text-4xl font-semibold mb-3
         text-mine-shaft-100 text-center'>How it <span  className='text-bright-sun-400'>Works</span></div>
         <div className='text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2'> Effortlessly nevigate through
          the process and land your dream job.</div>
          <div className='flex px-16 justify-between items-center'>
          <div className='relative'>
  <img className='w-[30rem]' src="/Working/Girl.png" alt="girl" />
  
  <div className='w-36 flex flex-col items-center gap-1 absolute top-[15%] right-0 border border-bright-sun-400 rounded-xl backdrop-blur-md py-3 px-1'>
    <Avatar className='!h-16 !w-16' src={avatar1} alt='its me' />
    <div className='text-sm font-semibold text-mine-shaft-200 text-center'>Complete your profile</div>
    <div className='text-xs text-mine-shaft-300'>70% completed</div>
  </div>
</div>

          
            <div className='flex flex-col gap-10'>
               {
                work.map((item,index)=> <div key={index} className='flex items-center gap-4'>
                <div className='p-3 bg-bright-sun-300 rounded-full items-center'>
                    <img className='h-12 w-12' src={`/Working/${item.name}.png`} alt={item.name} />
                </div>
                <div>
                <div className='text-mine-shaft-200 text-xl font-semibold'>{item.name}</div>
                <div className='text-mine-shaft-200'>{item.desc} </div>

                </div>
            </div>)
               }

            </div>
          </div>
    </div>
  )
}

export default Working
