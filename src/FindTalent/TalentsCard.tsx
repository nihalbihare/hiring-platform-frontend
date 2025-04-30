import { IconCalendarMonth,  IconHeart,IconMapPin } from '@tabler/icons-react'
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef, useState } from 'react';


const TalentsCard = (props:any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl 
  shadow-none hover:shadow-bright-sun transition-shadow duration-300">

  
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className=' p-2 bg-mine-shaft-800 rounded-full' >
                    <Avatar  src={`/${props.image}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-lg'>{props.name}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.role} &bull; {props.company}</div>
                </div>
            </div>
           <IconHeart className='text-mine-shaft-300  cursor-pointer'/>
        </div>
        <div className='flex gap-2 '>
          {
            props.topSkills?.map((skill:any, index:any)=><div key={index}>
              <div className='p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs'>{skill}</div>
            </div>)
          }
        </div>
        <Text className='!text-xs text-justify !text-mine-shaft-300' lineClamp={3}>
          {props.about}
    </Text>
    <Divider size='xs' color='mine-shaft.7'/>
{
    props.invited?<div className='text-mine-shaft-200 flex gap-1 text-sm items-center'>
      <IconCalendarMonth/> Interview: August 12 2025
    </div> : <div className='flex justify-between'>
            <div className='font-semibold text-mine-shaft-200'>
               {props.expectedCtc}
            </div >
            <div className=' flex gap-1 items-center text-xs text-mine-shaft-400'> 
                <IconMapPin className='h-5 w-5' stroke={1.5}/> {props.location}
                </div>
        </div>
}
        <Divider size='xs' color='mine-shaft.7'/>

        <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
        { !props.invited && 
    <>
      <Link to='/talent-profile'>
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
        <Button color='bright-sun.4' variant="outline" fullWidth>Accept</Button>
      </div>
      <div>
        <Button color='bright-sun.4' variant="light" fullWidth>Reject</Button>
      </div>
    </>
  }
        </div>
        <Modal opened={opened} onClose={close} title="Schedule interview" centered>
        <div className='flex flex-col gap-4'>
        <DateInput value={value} onChange={setValue} label="Date " placeholder="Enter Date"/>
        <TimeInput label="Time"  ref={ref}  onClick={() => ref.current?.showPicker()} />
        <Button color='bright-sun.4' variant="light" fullWidth>Schedule</Button>
   
    </div>

      </Modal>
       
      
    </div>
  )
}

export default TalentsCard
