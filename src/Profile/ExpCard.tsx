import { Button } from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpInput from './ExpInput'
import formatDate from '../Services/Utilities'

const ExpCard = (props: any) => {
  const [edit , setEdit] = useState(false)
  return (
    !edit ?<div className='flex flex-col gap-2'>
      
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center '>
          <div className=' p-2 bg-mine-shaft-800 rounded-md' >
            <img className='h-7' src={`Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className='font-semibold'>{props.title}</div>
            <div className='text-sm text-mine-shaft-300'>{props.company} &bull; {props.location}</div>
          </div>
        </div>
        <div className='text-sm text-mine-shaft-300'>
          {formatDate(props.startDate)} - {formatDate(props.endDate)}
        </div>
      </div>
      <div className='text-sm text-justify text-mine-shaft-300' >{props.description}</div>
     
     { props.edit && <div className='flex gap-3'>
        <Button onClick={()=>setEdit(true)} variant='light' color='bright-sun.4'>Edit</Button>
        <Button variant='outline' color='red.4'>Delete</Button>
      </div>}


    </div>: <ExpInput setEdit ={setEdit}/>
  )
}

export default ExpCard
