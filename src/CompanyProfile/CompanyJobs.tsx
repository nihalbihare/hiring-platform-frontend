import React from 'react'
import JobCard from '../FindJobs/JobCard'
import { jobList } from '../Data/Data'

export const CompanyJobs = () => {
  return (
    <div className='flex mt-10 flex-wrap gap-5'>
        {
          jobList.map((job,index)=> index <6 && <JobCard key={index} {...job} />)
        }
        
        </div>
  )
}
