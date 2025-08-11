import {  Tabs } from '@mantine/core'
import PostedJobCard from './PostedJobCard'
import { useEffect, useState } from 'react';


const PostedJobs = (props:any) => {
  const [activeTab , setActiveTab] = useState<string | any >("ACTIVE")
  
 useEffect(() => {
  if (props.job?.jobStatus && props.jobList?.length) {
    setActiveTab(props.job.jobStatus);
  } else {
    setActiveTab("ACTIVE");
  }
}, [props.job?.jobStatus, props.jobList]);

  return (
    <div className='w-1/5 mt-5'>
    <div className='text-2xl mb-5 font-semibold'>
        Jobs
        <div>


   
        <Tabs autoContrast variant="pills" value={activeTab} onChange={setActiveTab} >
      <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
        <Tabs.Tab value="ACTIVE">Active
          [{ props.jobList?.filter((job:any)=>job?.jobStatus == 'ACTIVE').length}]</Tabs.Tab>
        <Tabs.Tab value="DRAFT">Drafts[{ 
        props.jobList?.filter((job:any)=>job?.jobStatus == 'DRAFT').length}]</Tabs.Tab>
        <Tabs.Tab value="CLOSED">Closed[{ 
        props.jobList?.filter((job:any)=>job?.jobStatus == 'CLOSED').length}]</Tabs.Tab>

      </Tabs.List>
       </Tabs>
       
   
     
       <div className='flex flex-col gap-5 mt-5'>
       {
       props.jobList?.filter((job:any)=>job?.jobStatus == activeTab).map
       ((item:any, index:any)=><PostedJobCard key={index} {...item}/>) 
    
//The code filters the list of jobs and iterates through them. 
// It only includes jobs where jobStatus == activeTab, and for 
// each of those jobs, it renders a <PostedJobCard /> component.
       }
       </div>
        </div>
    </div>
    </div>
  )

}

export default PostedJobs
