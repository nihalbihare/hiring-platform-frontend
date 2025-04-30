import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ApplyJobComm from '../ApplyJob/ApplyJobComm'

const ApplyJobPage = () => {
    return (
        <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
          <Link to='/find-jobs' className='my-4 inline-block'>
        <Button leftSection={<IconArrowLeft size={20}/>} variant='light' color='bright-sun.4'>Back</Button>
        </Link>
        <ApplyJobComm/>
            </div>
           
      )
}

export default ApplyJobPage
