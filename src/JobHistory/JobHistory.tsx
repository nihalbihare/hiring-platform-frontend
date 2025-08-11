import { Tabs } from '@mantine/core'
import Card from '../JobHistory/Card'
import { getAllJobs } from '../Services/JobService'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const JobHistory = () => {
const profile = useSelector((state:any)=>state.profile)
const user = useSelector((state:any)=>state.user)
     const [activeTab, setActiveTab] = useState<any>('APPLIED');
     const [jobList , setJobList] = useState<any>([])
     const [showList ,setShowList] = useState<any>([])
 useEffect(() => {
  getAllJobs()
    .then((res) => {
      setJobList(res);
      setShowList(
        res.filter((job: any) => {
          return job.applicants?.some(
            (applicant: any) =>
              applicant?.applicantId === user.id &&
              applicant.applicationStatus === 'APPLIED'
          );
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

const handleTabChange = (value: string | null) => {
  setActiveTab(value);
  if (value === 'SAVED') {
    setShowList(jobList.filter((job: any) => profile.savedJobs?.includes(job.id)));
  } else {
    setShowList(
      jobList.filter((job: any) => {
        return job.applicants?.some(
          (applicant: any) =>
            applicant?.applicantId === user.id &&
            applicant.applicationStatus === value
        );
      })
    );
  }
}; 
    return (
        <div>
         
            <div className='text-2xl mb-5 font-semibold'>Job History</div>
            <div>
                <Tabs variant="outline" radius="lg" value={activeTab} onChange={handleTabChange}>
                    <Tabs.List className='[&_button]:text-lg mb-5 font-semibold
                         [&_button[data-active="true"]]:text-bright-sun-400 sm-mx:[&_button]:!text-lg'>
                        <Tabs.Tab value="APPLIED">Applied </Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved </Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered </Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Interviewing </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={activeTab}>
                     <div className='flex mt-10 flex-wrap gap-5'>   
                    {
            showList.map((job: any, index: any)=><Card key={index}
             {...job} {...{[activeTab.toLowerCase()]:true}} />)
        } 
</div>
                    </Tabs.Panel>
                    
                   
                </Tabs>
            </div>
        </div>
    )
}

export default JobHistory
