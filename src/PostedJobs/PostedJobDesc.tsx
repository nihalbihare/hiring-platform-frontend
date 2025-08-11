import { Badge, Tabs } from '@mantine/core'
import JobDesc from '../JobsDescription/JobDesc'
import TalentsCard from '../FindTalent/TalentsCard'
import { useEffect, useState } from 'react'

const PostedJobDesc = (props:any) => {
  const [tab , setTab] = useState("overview")
  const [arr , setArr] = useState<any>([]);
    const handleTabChange =((value:any)=>{
      setTab(value)
      if(value == 'applicants'){
        setArr(props.applicants?.filter((x:any)=>x.applicationStatus == "APPLIED"))
      }
      else if( value  == 'invited'){
        setArr(props.applicants?.filter((x:any)=>x.applicationStatus == "INTERVIEWING"))
      }
      else if( value ==  'offered'){
               setArr(props.applicants?.filter((x:any)=>x.applicationStatus == "OFFERED"))
      }
      else if(value  == 'rejected'){
               setArr(props.applicants?.filter((x:any)=>x.applicationStatus == "REJECTED"))
      }
  })

   useEffect (()=>{
        handleTabChange('overview')
      }, [props])
  return (
    <div className='mt-5 w-3/4 px-5 md-mx:w-full md-mx:p-0'>
     {props.jobTitle?<> <div className='text-2xl xs-mx:text-xl font-semibold items-center'>{props.jobTitle}  
        <Badge variant="light" ml="sm" size='sm' color="bright-sun.4">Badge</Badge></div>
        <div className='font-medium xs-mx:text-sm text-mine-shaft-300 mb-5'>
{props.location}  
      </div>
        <div>
        <Tabs value= {tab} onChange={handleTabChange} variant="outline" radius="lg"  >
                        <Tabs.List className='[&_button]:text-lg mb-5 font-semibold
                         [&_button[data-active="true"]]:text-bright-sun-400 sm-mx:[&_button]:!text-lg'>
                            <Tabs.Tab value="overview">Overview </Tabs.Tab>
                            <Tabs.Tab value="applicants">Applicants </Tabs.Tab>
                            <Tabs.Tab value="invited">Invited </Tabs.Tab>
                            <Tabs.Tab value="offered">Offered </Tabs.Tab>
                            <Tabs.Tab value="rejected">Rejected </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="overview" className='[&>div]:w-full'>
                            <JobDesc {...props} edit closed={props.jobStatus == "CLOSED"} />
                            </Tabs.Panel>
                        <Tabs.Panel value="applicants">
                           <div className='mt-10 flex ju flex-wrap gap-7 px-6   justify-around  '>
                               {arr?.length?arr.map((talent:any, index:any)=> 
                                <TalentsCard key={index} {...talent} posted/>):
                                <div className='text-2xl font-semibold'>No Applicants Found</div>}
                                 
                               </div>
                            </Tabs.Panel>
                        <Tabs.Panel value="invited">
                        <div className='mt-10 flex flex-wrap gap-7 px-6  justify-around  '>
                               {arr?.length?arr.map((talent:any, index:any)=> 
                                 <TalentsCard key={index} {...talent} invited/>):
                                 <div className='text-2xl font-semibold' >No Invited Candidates Found</div>}
                               </div>
                            </Tabs.Panel>
                              <Tabs.Panel value="offered">
                        <div className='mt-10 flex flex-wrap gap-7 px-6 justify-around   '>
                               {arr?.length?arr.map((talent:any, index:any)=> 
                                 <TalentsCard key={index} {...talent} offered/>):
                                 <div className='text-2xl font-semibold' >No Offered Candidates Found </div>}
                               </div>
                            </Tabs.Panel>
                             <Tabs.Panel value="rejected">
                        <div className='mt-10 flex flex-wrap gap-7 px-6  justify-around    '>
                               {arr?.length?arr.map((talent:any, index:any)=> 
                                 <TalentsCard key={index} {...talent} rejected/>):
                                 <div className='text-2xl font-semibold' >No Rejects Found </div>}
                                 
                               </div>
                            </Tabs.Panel>
                    </Tabs>

        </div></>:<div className='text-2xl font-semibold flex justify-center items-center
         '>No Job Selected</div>}
        
            </div>
  )
}

export default PostedJobDesc
