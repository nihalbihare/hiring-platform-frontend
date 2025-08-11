import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import { IconPaperclip } from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBase64 } from '../Services/Utilities'
import { applyJob } from '../Services/JobService'
import { errorNotification, successNotification } from '../Services/NotificationService'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const ApplicationForm = () => {
 const applicantId = useSelector((state:any)=>state.user.id)
  const {id} = useParams()
     const [preview , setPreview] = useState(false)
    const [submit , setSubmit] = useState(false)
    const navigate = useNavigate()

    const handlePreview =()=>{
        form.validate()
        if(!form.isValid()) return ;
        setPreview(!preview)
        console.log(form.getValues())
        // window.scrollTo({top: 0, behavior:'smooth'})
    }
  const handleSubmit = async () => {
    setSubmit(true);
    let resume: any = await getBase64(form.getValues().resume);

    // Add applicantId here
    let applicants = {
      ...form.getValues(),
      resume: resume.split(',')[1],
      applicantId: applicantId,   // <---- add this line
    };

    applyJob(id, applicants)
      .then(() => {
        setSubmit(false);
        successNotification("Success", "Application submitted successfully");
        navigate("/job-history");
      })
      .catch((err) => {
        setSubmit(false);
        errorNotification("Error", err.response?.data?.errorInfo);
      });
  };


    const form = useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            name : '',
            email : '',
            phone : '',
            website : '',
            resume: null,
            coverLetter: ''
        },
        validate:{
            name: isNotEmpty('name cannot be empty'),
            email:isNotEmpty('email cannot be empty'),
            phone:isNotEmpty('phone cannot be empty '),
            website:isNotEmpty('url cannot be empty'),
            resume:isNotEmpty('resume cannot be empty')
        }
    })
  return (
    <div>
          <LoadingOverlay className='fixed'
                  visible={submit}
                  zIndex={1000}
                  overlayProps={{ radius: 'sm', blur: 2 }}
                  loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
                />
      <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap'>
            <TextInput {...form.getInputProps('name')} label="Name" readOnly={preview} className= {`${preview ?
                 "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 
                 'unstyled' : 'default'} withAsterisk placeholder="Enter Full Name" />

            <TextInput  {...form.getInputProps('email')} label="Email"  readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`}
             variant={preview ? 'unstyled' : 'default'} withAsterisk placeholder="Enter Your Email" />
            </div>

            <div className='flex gap-10 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap  md-mx:gap-5'>
            <NumberInput  {...form.getInputProps('phone')} label="Phone no." readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'} withAsterisk hideControls 
           min={0} max={9999999999} clampBehavior='strict' placeholder="Enter Your Phone no." />

            <TextInput  {...form.getInputProps('website')} label="Personal Website" withAsterisk readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'} placeholder="Enter Url" />
            </div>
            <FileInput  {...form.getInputProps('resume')} accept='application/pdf' withAsterisk  readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'}
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
         <Textarea  {...form.getInputProps('coverLetter')} readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'}
      label="Cover Letter"
      placeholder="Type Something About Yourself"
      autosize minRows={4}
    />
          {!preview && < Button onClick={handlePreview}  
          variant='light' size='sm' color='bright-sun.4'>Preview</Button>}

                    {preview && <div className='flex gap-10 [&>*]:w-1/2'> <  Button fullWidth  
         onClick={handlePreview} variant='outline' size='sm' color='bright-sun.4'>Edit</Button>
             < Button fullWidth 
         onClick={handleSubmit} variant='light' size='sm' color='bright-sun.4'>Submit</Button>
          </div>}

        </div>
    </div>
  )
}

export default ApplicationForm


