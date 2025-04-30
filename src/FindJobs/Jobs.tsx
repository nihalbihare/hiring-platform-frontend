import React from 'react'
import { Sort } from './Sort'
import JobCard from './JobCard'
import { jobList } from '../Data/Data'

const Jobs = () => {
  return (
    <div className='p-5 mx-6 '>
        <div className='flex justify-between'>
      <div className='text-2xl font-semibold'> Recommended Jobs</div>
              <Sort/>
        </div>
        <div className='mt-10 flex flex-wrap gap-7 px-6 justify-around'>
        {
            jobList.map((job, index)=><JobCard key={index} {...job}/>)
        }
        </div>

    </div>
  )
}

export default Jobs
