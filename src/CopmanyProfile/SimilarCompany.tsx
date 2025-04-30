import React from 'react'
import JobCard from '../FindJobs/JobCard'
import { jobList, similar, talents } from '../Data/Data'
import TalentsCard from '../FindTalent/TalentsCard'
import CompnayCard from './CompanyCard'


const SimilarCompany = () => {
  return (
    <div className='w-1/4'>
        <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
        <div className='flex flex-col flex-wrap gap-5'>
        {
            similar.map((company ,index)=> <CompnayCard key={index} {...company} />)
        }
          </div>
      
    </div>
  )
}

export default SimilarCompany
