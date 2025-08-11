
import PostedJobs from '../PostedJobs/PostedJobs'
import PostedJobDesc from '../PostedJobs/PostedJobDesc'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getJobPostedBy } from '../Services/JobService'
import { Button, Drawer } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'

const PostedJobPage = () => {
  const navigate = useNavigate()
   const [opened, { open, close }] = useDisclosure(false);
  const {id} = useParams()
  const user = useSelector((state:any)=>state.user)
  const [jobList , setJobList] = useState<any[]>([]);
  const [job , setJob] = useState<any>({})
   const matches = useMediaQuery('(min-width: 767px)');
  useEffect (()=>{
    getJobPostedBy(user.id).then((res)=>{
      setJobList(res)
      if(res && res.length>0 && Number(id)==0) navigate(`/posted-jobs/${res[0].id}`) 
      setJob(res.find((item:any)=>item.id == id)) // saving the job where the item id == id 
    }).catch((err)=>{
      console.log(err)
    })

  },[id]) // runs every time when id changes
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-4'>
       {!matches && <Button my="xs" size='sm' autoContrast  onClick={open}> All Jobs</Button>}
      <Drawer opened={opened} size={230}  overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} onClose={close} title="All Jobs">
    <PostedJobs job={job} jobList ={jobList} />
      </Drawer>
  <div className='flex gap-5 justify-around'>
        
    {matches && <PostedJobs job={job} jobList ={jobList} />}
    <PostedJobDesc {...job} />
  
    </div>
    </div>
  )
}

export default PostedJobPage
