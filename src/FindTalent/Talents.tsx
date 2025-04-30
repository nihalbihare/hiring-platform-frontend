import React from 'react'
import TalentsCard from './TalentsCard'
import { Sort } from '../FindJobs/Sort'
import { talents } from '../Data/Data'

const Talents = () => {
  return (
    <div className='p-5 mx-6 '>
        <div className='flex justify-between'>
      <div className='text-2xl font-semibold'> Recommended Jobs</div>
              <Sort/>
        </div>
        <div className='mt-10 flex flex-wrap gap-7 px-6 justify-around '>
            {talents.map((talent: any, index: number) => 
             <TalentsCard key={index} {...talent} />)}
         
     
        </div>

    </div>
  )
}

export default Talents
