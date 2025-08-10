import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconAdjustments, IconBookmark, IconBookmarkFilled, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/Data'
//@ts-ignore
import DOMPurify from 'dompurify'
import { timeAgo } from '../Services/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { postJob } from '../Services/JobService'
import { errorNotification, successNotification } from '../Services/NotificationService'

const JobDesc = (props:any) => {
    const dispatch = useDispatch()
    const [applied ,setApplied] = useState(false)
    const profile = useSelector((state:any)=>state.profile)
    const userProfile = useSelector((state:any)=>state.userProfile || {})
  const cleanHTML = DOMPurify.sanitize(props.description); // it help to maintain the order of description
    const handleSaveJobs = ()=>{
   let savedJobs: any = [...profile.savedJobs|| []];
          if(savedJobs?.includes(props.id)){
              savedJobs = savedJobs?.filter((id:any)=>id != props.id) // if props.id include so we remove the id 
          }
          else{
              savedJobs = [...savedJobs,props.id ] // else add that id into the saved jobs
          }
         let updateProfile = { ...profile, savedJobs: savedJobs }
        dispatch(changeProfile(updateProfile))
     
      }
      useEffect (()=>{
        if(props.applicants?.filter((applicant:any)=>applicant.id == userProfile.id).length>0){ // same here we checking that 
          // if the applicant id is == userprofile id means the user  applied with that particulare id for the given job 
          setApplied(true) // set the applied use state variable with true else false 
        }
        else{
          setApplied(false)
        }
      },[props]) // it runs on props
      const handleClose =()=>{
        postJob({...props , jobStatus : 'CLOSED'}).then((res)=>{
          successNotification("Success" , "Job Closed Successfully")
        }).catch((err)=>{
          errorNotification('Error', err.response?.data?.errorInfo )
        })

      }
  return (
    <div className='w-2/3 bs-mx:w-full'>
       <div className='flex justify-between flex-wrap '>
            <div className='flex gap-2 items-center '>
                <div className=' p-3 bg-mine-shaft-800 rounded-xl shrink-0' >
           <img className='h-14 xs-mx:h-10  xs-mx:w-10' src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-2xl xs-mx:text-xl'>{props.jobTitle} </div>
                    <div className='text-lg text-mine-shaft-300 xs-mx:text-base'>
                      <span>{props.company} &bull;</span><span>{timeAgo(props.postTime)} &bull;
                      </span><span> {props.applicants?props.applicants.length:0} Applicants </span></div>
                </div> 
            </div>
            <div className='flex flex-col sm:flex-col items-center gap-2 sm-mx:my-5 sm-mx:w-full 
            sm-mx:[&>button]:w-1/2 '>
                {(props.edit || !applied) && <Link to={props.edit?`/post-jobs/${props.id}`:`/apply-job/${props.id}`}>
             <Button  variant='light' size='sm' color='bright-sun.4'>
              {props.closed? "Reopen": props.edit?"Edit":"Apply"}</Button>
             </Link>}
             {
                !props.edit && applied&&<Button  
                variant='light'  size='sm' color='green.8'>Applied</Button>
             }
           {props.edit && !props.closed ?<Button onClick={handleClose}   variant='outline' size='sm' color='red.5'>Close</Button>
            :profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJobs} 
            className='text-bright-sun-400   cursor-pointer'/>:
<IconBookmark  onClick={handleSaveJobs}  className='hover:text-bright-sun-400
 text-mine-shaft-300  cursor-pointer'/>}
           </div>
        </div>
        <Divider my='xl'/>
        <div className='flex justify-between gap-6 sm-mx:flex-wrap'>
          {
            card.map((item:any, index :any)=><div key={index} className='flex flex-col  xs-mx:!h-12 xs-mx:!w-12 items-center gap-1'>
            <ActionIcon className='!h-12 !w-12' color='bright-sun.4' variant="light"  radius="xl" aria-label="Settings">
          <item.icon className='h-4/5 w-4/5' stroke={1.5} />
        </ActionIcon>
        <div className='text-sm xs-mx:text-xs text-mine-shaft-300'>{item.name}</div>
        <div className='font-semibold xs-mx:text-xs'>{props?props[item.id]:"NA"}{item.id == "packageOffered"&&<> LPA</>}</div>
        </div> )

}
          </div>
          <Divider my='xl' />
          <div>
            <div className='text-xl font-semibold mb-5 my-6'>Required Skills</div>
            <div className='flex flex-wrap gap-2'>
              {
               props?.skillsRequired?.map((item:any, index:number)=> < ActionIcon key={index} className='!h-fit !w-fit !text-sm font-medium'
                color='bright-sun.4' p='xs' variant="light"  radius="xl" aria-label="Settings">
            {item} 
            {/* here we are using mapping the skills and we are using ? because 
            if props?.skillsRequired? is null it give undefined it wont proceed so we use ? this it only show 
            if the skill is not null or undefined  */}
           </ActionIcon>)
              }
           
            </div>
          </div>
          <Divider my='xl' />
          <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300  [&_ul]:list-disc [&_ul]:pl-5
           [&_li]:marker:text-bright-sun-300 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold
           [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_p]:text-sm [&_li]:text-sm' dangerouslySetInnerHTML={{__html:cleanHTML}}>
</div>
          <Divider my='xl'/>
          <div>
           <div className='text-xl font-semibold mb-5'>About Company</div>
           <div className='flex justify-between mb-3 xs-mx:flex-wrap xs-mx:gap-2'>
            <div className='flex gap-2 items-center '>
                <div className=' p-3 bg-mine-shaft-800 rounded-xl' >
                              <img className='h-14' src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className='flex flex-col'>
                    <div className='font-medium text-lg'>{props.company} </div>
                    <div className=' text-mine-shaft-300'>10k+ Employees</div>
                </div>
            </div>
            <div className='flex flex-col items-center  '>
                <Link to={`/company/${props.company}`}>
             <Button  variant='light' size='sm' color='bright-sun.4'>Company Page</Button>
             </Link>
           </div>
        </div>
        <div className='text-mine-shaft-300 text-justify mt-4 xs-mx:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus assumenda libero saepe qui facere magnam dolores adipisci non temporibus id ullam blanditiis tempore quas fuga nemo enim culpa esse, ea aut ab iure? Porro facere illum, magnam omnis tempore molestias.</div>
          </div>
         
    </div>
  )
}

export default JobDesc
