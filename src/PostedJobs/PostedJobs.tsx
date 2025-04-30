import { Tabs } from '@mantine/core'
import React from 'react'
import { activeJobs } from '../Data/Data'
import PostedJobCard from './PostedJobCard'

const PostedJobs = () => {
  return (
    <div className='w-1/5 mt-5'>
    <div className='text-2xl mb-5 font-semibold'>
        Jobs
        <div>
        <Tabs autoContrast variant="pills" defaultValue="active">
      <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
        <Tabs.Tab value="active">Active[4]</Tabs.Tab>
        <Tabs.Tab value="draft">Draft[1]</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="active">
       <div className='flex flex-col gap-5 mt-5'>
       {
        activeJobs.map((item, index)=><PostedJobCard key={index} {...item}/>)

       }
       </div>
        </Tabs.Panel>
      <Tabs.Panel value="draft">
        Second panel
        </Tabs.Panel>
    </Tabs>
        </div>
      
    </div>
    </div>
  )

}

export default PostedJobs
