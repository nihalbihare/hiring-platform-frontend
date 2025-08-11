import { Avatar, Divider, Tabs } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import AboutComp from './AboutComp'
import { CompanyJobs } from './CompanyJobs'
import CompanyEmp from './CompanyEmp'

const Company = () => {
  return (
    <div className='w-3/4'>
         <div className='relative'>
            <img className='rounded-t-2xl' src="/banner.jpg" alt="" />
            <img className='rounded-full w-36 h-36 absolute
             -bottom-1/4 left-5 border-mine-shaft-950 border-8 
             bg-mine-shaft-950 p-2' src=" /Icons/Google.png" alt="" />
             </div>
             <div className='px-7 mt-16 '>
             <div className='text-3xl font-semibold flex justify-between'>Google
             <Avatar.Group>
      <Avatar src="avatar.png" />
      <Avatar src="avatar1.png" />
      <Avatar src="avatar2.png" />
      <Avatar>+5k</Avatar>
    </Avatar.Group>
         </div>
             <div className='flex gap-1 items-center text-xl'> <IconBriefcase className='h-5 w-5 ' stroke={1.5}/>
             Software Engineer &bull; Google
              </div>
             <div className=' flex gap-1 items-center text-lg text-mine-shaft-400'> 
                <IconMapPin className='h-5 w-5' stroke={1.5}/> New York, United States
                </div>
        </div>
        <Divider  my='xl' />
        <div>
        <Tabs variant='outline' defaultValue='about' radius='lg'>
      <Tabs.List className='[&_button]:text-lg font-semibold [&_button[data-active="true"]]:text-bright-sun-400'>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>

      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmp/></Tabs.Panel>
    </Tabs>
        </div>
      
    </div>
  )
}

export default Company
