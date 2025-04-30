import React from 'react'
import PostedJobs from '../PostedJobs/PostedJobs'
import PostedJobDesc from '../PostedJobs/PostedJobDesc'

const PostedJobPage = () => {
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-4'>
  <div className='flex gap-5 '>
    <PostedJobs/>
    <PostedJobDesc/>
  
    </div>
    </div>
  )
}

export default PostedJobPage
