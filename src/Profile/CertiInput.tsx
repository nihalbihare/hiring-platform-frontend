import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { field } from '../Data/Data'
import  {SelectInput}  from './SelectInput'
import { MonthPickerInput } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'
import { useMediaQuery } from '@mantine/hooks'

const CertiInput = (props:any) => {
    const profile = useSelector((state: any) => state.profile)
    const dispatch = useDispatch()
    const matches = useMediaQuery('(max-width:475px)')
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
          name: '',
         issuer : '',
          issueDate: new Date(),
          certificateID : ''

       
        },
        validate: {
          name: isNotEmpty('Title is required'),
          issuer: isNotEmpty('Company is required'),
          issueDate: isNotEmpty('Location is required'),
          certificateID: isNotEmpty('Description is required'),
        },
      });
      const handleSave = () =>{
        form.validate()
        if(!form.isValid()) return
        let certi = [...profile.certification]
        certi.push(form.getValues())
        certi[certi.length-1].issueDate = certi[certi.length-1].issueDate.toISOString()
        let updateProfile = {...profile , certification : certi}
        props.setEdit(false)
        dispatch(changeProfile(updateProfile))
        successNotification("Success" , "Certificate Added Successfully")

         


      }
 
  const select = field 
    return (
    <div className='flex flex-col gap-3 mt-3'>
        <div className='text-lg font-semibold'>Add Certificate</div>
        <div className='flex md-mx:gap-5 xs-mx:[&>*]:w-full xs-mx:flex-wrap gap-10 [&>*]:w-1/2'>
        <TextInput {...form.getInputProps('name')} label="Title" withAsterisk placeholder="Enter Title"/>
         <SelectInput form ={form} name='issuer' {...select[1]} />
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
         <MonthPickerInput {...form.getInputProps('issueDate')} withAsterisk maxDate={new Date()} 
          label="issue date"  placeholder="Pick date"  />
           <TextInput {...form.getInputProps('certificateID')} label="Certificate ID " withAsterisk placeholder="Enter ID"/>             
        </div>
<div className='flex gap-4'>
    <Button onClick={handleSave}  size={matches?'xs':'sm'} variant='light' color='bright-sun.4'>Save</Button>
     <Button onClick={()=> props.setEdit(false)} size={matches?'xs':'sm'} variant='outline' color='red.4'>Cancel</Button>
     </div>
    </div>

  )
}

export default CertiInput
