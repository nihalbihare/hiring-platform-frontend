import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconBookmark, IconCheck, IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Notification } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ApplyJobComm = () => {
    const [preview , setPreview] = useState(false)
    const [submit , setSubmit] = useState(false)
    const [sec , setSec] = useState(5);
    const navigate = useNavigate()

    const handlePreview =()=>{
        setPreview(!preview)
        // window.scrollTo({top: 0, behavior:'smooth'})
    }
    const handleSubmit =()=>{
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--
            setSec(x);
            if(x == 0){
                navigate('/find-jobs')

            }
                
        }, 1000);

    }

  return (
    <>    <div className='w-2/3 mx-auto'>
         <LoadingOverlay className='fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
      <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className=' p-3 bg-mine-shaft-800 rounded-xl' >
                    <img className='h-14' src={`Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-2xl'>Software Engineer </div>
                    <div className='text-lg text-mine-shaft-300'>Google &bull; 3 days ago &bull; 23 Applicants</div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
           </div>
        </div>
        <Divider my='xl'/>
        <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 [&>*]:w-1/2'>
            <TextInput label="Name" readOnly={preview} className= {`${preview ?
                 "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 
                 'unstyled' : 'default'} withAsterisk placeholder="Enter Full Name" />

            <TextInput label="Email"  readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`}
             variant={preview ? 'unstyled' : 'default'} withAsterisk placeholder="Enter Your Email" />
            </div>

            <div className='flex gap-10 [&>*]:w-1/2'>
            <NumberInput label="Phone no." readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'} withAsterisk hideControls 
           min={0} max={9999999999} clampBehavior='strict' placeholder="Enter Your Phone no." />

            <TextInput label="Personal Website" withAsterisk readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'} placeholder="Enter Url" />
            </div>
            <FileInput withAsterisk  readOnly={preview} className= {`${preview ? 
            "text-mine-shaft-300 font-semibold":""}`} variant={preview ? 'unstyled' : 'default'}
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
         <Textarea withAsterisk  readOnly={preview} className= {`${preview ? 
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
    <Notification className={`border border-bright-sun-400 z-[1001] !fixed top-0 left-[40%] 
transition-all duration-500 ease-in-out
${submit ? "translate-y-0" : "-translate-y-20"}`} icon={<IconCheck size={20} />} color="teal" title="Application Submitted!" 
    mt="md" withCloseButton={false}>
        Redirecting to Find jobs page in {sec} seconds...
      </Notification>
        </>
  )
}

export default ApplyJobComm
