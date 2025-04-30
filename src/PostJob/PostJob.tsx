import React from 'react'
import { fields } from '../Data/Data'
import { SelectInput } from './SelectInput'
import { Button, TagsInput } from '@mantine/core'
import RichText from './RichText'

const PostJob = () => {
    const select = fields
  return (
   <div className='w-4/5 mx-auto '>
     <div className='font-semibold text-2xl'>Post a Job</div>
     <div className='flex flex-col gap-5'>
    <div className='flex gap-10 [&>*]:w-1/2'>
        <SelectInput {...select[0]}/>
        <SelectInput {...select[1]}/> 
    </div>
    <div className='flex gap-10 [&>*]:w-1/2'>
        <SelectInput {...select[2]}/>
        <SelectInput {...select[3]}/> 
    </div>
    <div className='flex gap-10 [&>*]:w-1/2'>
        <SelectInput {...select[4]}/>
        <SelectInput {...select[5]}/> 
        </div>
    </div>
    <TagsInput label=" Skills" withAsterisk
     acceptValueOnBlur splitChars={[',', ' ', '|']} placeholder="Enter Skills"  clearable/>
     <div className="[&_button[data-active='true']]:!text-bright-sun-400
       [&_button[data-active='true']]:!bg-bright-sun-400/20">
     <div className='font-medium text-sm mt-2'>Job description</div>
     <RichText/>
     </div>
     <div className='flex gap-4 mt-4' >
     <Button  variant='light' color='bright-sun.4'>Publish Job</Button>
     <Button  variant='outline' color='bright-sun.4'>Save As Draft</Button>
     </div>

    </div>
  )
}

export default PostJob
