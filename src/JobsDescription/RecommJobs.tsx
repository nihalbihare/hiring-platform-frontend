import React from 'react'
import { jobList } from '../Data/Data'
import JobCard from '../FindJobs/JobCard'

const RecommJobs = () => {
  return (
    <div>
       <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
       <div className='flex flex-col flex-wrap gap-5'>{jobList.map((talent, index)=> 
        index<4 && <JobCard key={index} {...talent}/>)} </div>
    </div>
  )
}

export default RecommJobs
