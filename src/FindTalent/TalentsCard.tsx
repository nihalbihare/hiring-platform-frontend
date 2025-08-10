import { IconCalendarMonth,  IconHeart,IconMapPin } from '@tabler/icons-react'
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { useEffect, useRef, useState } from 'react';
import { getProfile } from '../Services/ProfileServices';
import { changeAppStatus } from '../Services/JobService';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { formatInterviewDateTime, openBase64PdfInNewTab } from '../Services/Utilities';


const TalentsCard = (props:any) => {
  const {id} = useParams()
  const [opened, { open, close }] = useDisclosure(false);
  const [app, {open :openApp , close:closeApp}] = useDisclosure(false)
  const [date, setDate] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [profile ,setProfile] = useState<any>({})
  const [time , setTime] = useState('')
  useEffect (()=>{
    if(props.applicantId)getProfile(props.applicantId).then((res)=>{
      setProfile(res)
     
    }).catch((err)=>{
      console.log(err)
    })
    else{
      setProfile(props)
    }
  },[props])
  useEffect(() => {
  console.log("Profile location:", profile.location);
}, [profile]);

  const handleOffer =(status :string) =>{
    let interview = {id , applicantId : profile?.id , applicationStatus: status, interviewTime:date}
    if(status == 'INTERVIEWING'){
    const [hours ,minutes] = time.split(':').map(Number)
    date?.setHours(hours , minutes)
    interview = {...interview}
    }
       changeAppStatus(interview).then((res)=>{
        if(status == "INTERVIEWING"){
        successNotification('Interview Scheduled' , 'Interview Scheduled Successfully')
       
      }
      else if(status == "OFFERED"){
        successNotification('Offered Successfully' , 'Offered Had Been Sent Successfully')
      }
      else{
        successNotification('Rejected' ,'Offer Rejected Successfully')
      }
 
      }).catch((err)=>{
        console.log(err)
        errorNotification("Error", err.response?.data?.errorInfo);
       })

  }

  return (
    <div className="bg-mine-shaft-900 p-4 w-80 flex flex-col gap-3 rounded-xl 
  shadow-none hover:shadow-bright-sun transition-shadow duration-300 0 sm-mx:w-full">

  
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className=' p-2 bg-mine-shaft-800 rounded-full' >
                    <Avatar  src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:"/avatar.png"} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-lg'>{props.name}</div>
                    <div className='text-sm text-mine-shaft-300'>{profile?.jobTitle} &bull; {profile?.company}</div>
                </div>
            </div>
           <IconHeart className='text-mine-shaft-300  cursor-pointer'/>
        </div>
        <div className='flex gap-2 flex-wrap '>
          {
            profile.skills?.map((skill:any, index:any)=>index<4  && <div  key={index}  >
              <div className='p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs'>{skill}</div>
            </div>)
          }
        </div>
        <Text className='!text-xs text-justify !text-mine-shaft-300' lineClamp={3}>
          {profile.about}
    </Text>
    <Divider size='xs' color='mine-shaft.7'/>
{
    props.invited?<div className='text-mine-shaft-200 flex gap-1 text-sm items-center'>
      <IconCalendarMonth/> Interview: {formatInterviewDateTime(props.interviewTime)}
    </div> : <div className='flex justify-between'>
            <div className='font-semibold text-mine-shaft-200'>
                Exp : {props.totalExp?props.totalExp: 1} Years
            </div >
            <div className=' flex gap-1 items-center text-xs text-mine-shaft-400'> 
                <IconMapPin className='h-5 w-5' stroke={1.5}/> {profile?.location}
                </div>
        </div>
}
        <Divider size='xs' color='mine-shaft.7'/>

        <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
        { !props.invited && 
    <>
      <Link to={`/talent-profile/${profile?.id}`}>
        <Button color='bright-sun.4' variant="outline" fullWidth>Profile</Button>
      </Link>
      <div>
        { props.posted ? 
          <Button color='bright-sun.4' onClick={open} rightSection=
          {<IconCalendarMonth className='w-5 h-5' />} variant="light" fullWidth>Schedule</Button> 
          :
          <Button color='bright-sun.4' variant="light" fullWidth>Message</Button>
        }
      </div>
    </>
  }

  { props.invited && 
    <>
      <div>
        <Button onClick={()=> handleOffer("OFFERED")} color='bright-sun.4' variant="outline" fullWidth>Accept</Button>
      </div>
      <div>
        <Button onClick={()=> handleOffer("REJECTED")} color='bright-sun.4' variant="light" fullWidth>Reject</Button>
      </div>
    </>
  }
        </div>
  {
    (props.invited || props.posted) && <Button onClick={openApp}
     color='bright-sun.4' autoContrast variant="filled" fullWidth>View Application</Button>
  }
        <Modal opened={opened} onClose={close} title="Application" centered>
        <div className='flex flex-col gap-4'>
        <DateInput value={date} onChange={setDate} label="Date " placeholder="Enter Date"/>
        <TimeInput label="Time" value={time} onChange={(event)=>setTime(event.currentTarget.value)} ref={ref}  onClick={() => ref.current?.showPicker()} />
        <Button onClick={()=> handleOffer("INTERVIEWING")} color='bright-sun.4' variant="light" fullWidth>Schedule</Button>
   
    </div>

      </Modal>

       <Modal opened={app} onClose={closeApp} title="Schedule interview" centered>
        <div className='flex flex-col gap-4'>
        <div>
          Email: &emsp; <a className='text-bright-sun-400 hover:underline 
          cursor-pointer text-center' href= {`mailto:${props.email}`}>{props.email}            
          </a>
        </div>
         <div>
          Website: &emsp; <a className='text-bright-sun-400 hover:underline 
          cursor-pointer text-center' href= {props.website}>{props.website}            
          </a>
        </div>
         <div>
          Resume: &emsp; <span className='text-bright-sun-400 hover:underline 
          cursor-pointer text-center' onClick={()=>
            openBase64PdfInNewTab(props.resume)} >{props.name}            
          </span>
        </div>
    </div>
        <div>
          Cover Letter: &emsp; <div>{props.coverLetter}            
          </div>
        </div>


      </Modal>
       
      
    </div>
  )
}

export default TalentsCard
