import { ActionIcon } from '@mantine/core'
import { IconBriefcase, IconCheck, IconDeviceFloppy, IconMapPin, IconPencil, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { SelectInput } from './SelectInput'
import { field, profile } from '../Data/Data'
import {useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'

const Info = () => {
    const select = field
    const [edit ,setEdit] = useState(false)
    const dispatch = useDispatch()
    const profile =useSelector((state:any)=>state.profile)
    const user =useSelector((state:any)=>state.user)
    const handleEdit =()=>{
        if(!edit){
            setEdit(true)
            form.setValues({ jobTitle: profile.jobTitle,
               company: profile.company, location:profile.location })
            
        }
        else{
            setEdit(false)
           
             
        }
    }
    const handleSave =() =>{
      let updateProfile = {...profile , ...form.getValues()}
      dispatch(changeProfile(updateProfile))
      console.log(updateProfile)
      successNotification("Updated", "Profile Updated Successfully")
    }
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '', location:''},
      });
  return (
    <div>
       <div className='text-3xl font-semibold flex justify-between'>{user.name}
         <div> {edit && <ActionIcon onClick={handleSave} color='green.8' size='lg' variant="subtle" aria-label="Settings">
            <IconCheck className='h-4/5 w-4/5 ' /> 
          </ActionIcon>}
          <ActionIcon onClick={handleEdit} color={edit ?'red.8' :'bright-sun.4'} size='lg' variant="subtle" aria-label="Settings">
            {edit ? <IconX className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
          </ActionIcon></div></div>

        {edit ? <>
          <div className='flex gap-10 [&>*]:w-2/3'>
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>

          <SelectInput form={form} name="location"  {...select[2]} />

        </>: <>
          <div className='flex gap-1 items-center text-xl'> <IconBriefcase className='h-5 w-5 ' stroke={1.5} />
           {profile.jobTitle}&bull; {profile.company}</div>
          <div className=' flex gap-1 items-center text-lg text-mine-shaft-400'>
            <IconMapPin className='h-5 w-5' stroke={1.5} />  {profile.location}
          </div>
        </>}

      </div>
   
  )
}

export default Info
