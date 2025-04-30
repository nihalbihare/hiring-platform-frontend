import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { field } from '../Data/Data'
import { SelectInput } from './SelectInput'
import { MonthPickerInput } from '@mantine/dates'

const CertiInput = (props:any) => {
    const [issueDate , setIssueData] = useState<Date | null>(null)
 
  const select = field 
    return (
    <div className='flex flex-col gap-3 mt-3'>
        <div className='text-lg font-semibold'>Add Certificate</div>
        <div className='flex gap-10 [&>*]:w-1/2'>
        <TextInput label="Title" withAsterisk placeholder="Enter Title"/>
         <SelectInput {...select[1]} />
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
         <MonthPickerInput withAsterisk maxDate={new Date()} 
          label="issue date"  placeholder="Pick date"  value={issueDate} onChange={setIssueData}/>
           <TextInput label="Certificate ID " withAsterisk placeholder="Enter ID"/>             
        </div>
<div className='flex gap-4'>
    <Button onClick={()=> props.setEdit(false)} variant='light' color='bright-sun.4'>Save</Button>
     <Button onClick={()=> props.setEdit(false)} variant='outline' color='red.4'>Cancel</Button>
     </div>
    </div>

  )
}

export default CertiInput
