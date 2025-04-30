import { Button, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconArrowLeft } from '@tabler/icons-react'
import JobDesc from '../JobsDescription/JobDesc'
import RecommJobs from '../JobsDescription/RecommJobs'


const JobDescPage = () => {
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
        <Link to='/find-jobs' className='my-4 inline-block'>
        <Button leftSection={<IconArrowLeft size={20}/>} variant='light' color='bright-sun.4'>Back</Button>
        </Link>
        <div className='flex gap-5 justify-around'>
            <JobDesc/>
            <RecommJobs/>

        </div>
       
      
    </div>
  )
}

export default JobDescPage;
