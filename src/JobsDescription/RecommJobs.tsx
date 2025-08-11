
import { useEffect, useState } from 'react'
import JobCard from '../FindJobs/JobCard'
import { getAllJobs } from '../Services/JobService'
import { useParams } from 'react-router-dom'

const RecommJobs = () => {
  const {id} =useParams()
    const [jobList , setJobList] = useState<any>(null)
    useEffect (()=>{
      window.scrollTo(0,0)
      getAllJobs().then((res)=>{
        setJobList(res)
      }).catch((err)=>{
        console.log(err)
      })
  
    },[id])
  return (
    <div>
       <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
       <div className='flex bs:flex-col bs-mx:justify-start flex-wrap gap-5'>{jobList?.map((talent:any, index:number)=> 
        index<4 && id!=talent.id && <JobCard key={index} {...talent}/>)} </div>
        {/* id!=talent.id this because we dont want like if we are at the page and it recomm. same page 
        we dont want this thats why this  */}
    </div>
  )
}

export default RecommJobs
