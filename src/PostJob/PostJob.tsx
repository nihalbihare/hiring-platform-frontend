import { useEffect, useState } from 'react'
import { content, fields } from '../Data/Data'
import { SelectInput } from './SelectInput'
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core'
import RichText from './RichText'
import { isNotEmpty, useForm } from '@mantine/form'
import { getJob, postJob } from '../Services/JobService'
import { errorNotification, successNotification } from '../Services/NotificationService'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostJob = () => {
  const  {id} = useParams()
  const[editorData , SetEditorData] = useState(content)
   const user = useSelector((state:any)=>state.user)
    const select = fields
    const navigate = useNavigate()
    useEffect (()=>{
      window.scrollTo(0,0)
      if(id != '0'){
        getJob(id).then((res)=>{
          form.setValues(res)
          SetEditorData(res.description)
        }).catch((err)=>{
          console.log(err)
        })
      }
      else {
        form.reset()
        SetEditorData(content)
      }
    },[id])
     const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
          jobTitle: '',
          company: '',
          experience: '',
          jobType: '',
          location: '',
          packageOffered: '',
          skillsRequired: [],
          about : '',
          description : content
        },
        validate: {
          jobTitle : isNotEmpty('Title is required'),
          company : isNotEmpty('Company is required'),
          experience: isNotEmpty('Experience is required'),
          jobType : isNotEmpty('JobType is required'),
          location: isNotEmpty('Location is required'),
          packageOffered: isNotEmpty('Package is required'),
          skillsRequired : isNotEmpty('Skill is required'),
          about : isNotEmpty('About is required'),
          description : isNotEmpty('Description is required')

        },
      });
      const handlePost =()=>{
       form.validate();
       if(!form.isValid()) return;
       postJob({...form.getValues() ,id, postedBy: user.id , jobStatus : 'ACTIVE'}).then((res)=>{
        console.log(res)
        successNotification('Success', 'Job Posted Successfully')
        navigate(`/posted-jobs/${res.id}`)
       }).catch((err)=>{
        console.log(err)
         errorNotification("Error",  err.response?.data?.errorInfo,)
       })
      }
        const handleDraft =()=>{
       postJob({...form.getValues() ,id, postedBy: user.id , jobStatus : 'DRAFT'}).then((res)=>{
        console.log(res)
        successNotification('Success', 'Job Drafted Successfully')
        navigate(`/posted-jobs/${res.id}`)
       }).catch((err)=>{
        console.log(err)
         errorNotification("Error",  err.response?.data?.errorInfo,)

       })

      }
  return (
   <div className='w-4/5 mx-auto bs-mx:px-10 md-mx:px-5 '>
     <div className='font-semibold text-2xl'>Post a Job</div>
     <div className='flex flex-col gap-5'>
    <div className='flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap'>
        <SelectInput form={form}  name="jobTitle" {...select[0]}/>
        <SelectInput form={form} name="company" {...select[1]}/> 
    </div>
    <div className='flex gap-10  md-mx:gap-5  [&>*]:w-1/2  sm-mx:[&>*]:!w-full sm-mx:flex-wrap'>
        <SelectInput form={form} name="experience" {...select[2]}/>
        <SelectInput form={form} name="jobType" {...select[3]}/> 
    </div>
    <div className='flex gap-10  md-mx:gap-5 [&>*]:w-1/2  sm-mx:[&>*]:!w-full sm-mx:flex-wrap'>
        <SelectInput form={form} name="location" {...select[4]}/>
        <NumberInput {...form.getInputProps('packageOffered')} label="Salary(LPA)"  placeholder="Enter Salary" min={1} max={300} 
        clampBehavior='strict' withAsterisk  hideControls />
        </div>
    </div>
    <TagsInput {...form.getInputProps('skillsRequired')} label=" Skills" withAsterisk
     acceptValueOnBlur splitChars={[',', ' ', '|']} placeholder="Enter Skills"  clearable/>
     <Textarea {...form.getInputProps('about')} 
             withAsterisk
             label='About Job'
             placeholder='Enter about job'
             autosize
             minRows={3}
            
           />
     
     <div className="[&_button[data-active='true']]:!text-bright-sun-400
       [&_button[data-active='true']]:!bg-bright-sun-400/20">
     <div className='font-medium text-sm mt-2'>Job description<span className='text-red-500'>*</span></div>
     <RichText form={form} data={editorData}/>
     </div>
     <div className='flex gap-4 mt-4' >
     <Button onClick={handlePost}  variant='light' color='bright-sun.4'>Publish Job</Button>
     <Button onClick={handleDraft}  variant='outline' color='bright-sun.4'>Save As Draft</Button>
     </div>

    </div>
  )
}

export default PostJob
