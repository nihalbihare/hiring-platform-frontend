import { Button } from '@mantine/core'
import  { useState } from 'react'
import ExpInput from './ExpInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'
import { formatDate } from '../Services/Utilities'

const ExpCard = (props: any) => {
  const [edit , setEdit] = useState(false)
  const profile = useSelector((state :any )=> state.profile) // fetching the profile part from the redux 
  //store 
  const dispatch = useDispatch()
  const handleDelete = () =>{
    let exp = [...profile.experience]
    exp.splice(props.index , 1)
    let updateProfile = {...profile, experience : exp}
    dispatch(changeProfile(updateProfile))
    successNotification("Deleted" , "Experience Deleted Successfully")

  }
  return (
    !edit ?<div className='flex flex-col gap-2'>
      
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center '>
          <div className=' p-2 bg-mine-shaft-800 rounded-md flex-shrink-0' >
            <img className='h-7' src={`Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className='font-semibold'>{props.title}</div>
            <div className='text-sm text-mine-shaft-300'>{props.company} &bull; {props.location}</div>
          </div>
        </div>
        <div className='text-sm text-mine-shaft-300'>
          {formatDate(props.startDate)} - {props.working ?"Present":formatDate(props.endDate)}
        </div>
      </div>
      <div className='text-sm text-justify text-mine-shaft-300' >{props.description}</div>
     
     { props.edit && <div className='flex gap-3'>
        <Button onClick={()=>setEdit(true)} variant='light' color='bright-sun.4'>Edit</Button>
        <Button onClick={handleDelete} variant='outline' color='red.4'>Delete</Button>
      </div>}


    </div>: <ExpInput  {...props} setEdit ={setEdit}/>
  )
}

export default ExpCard
