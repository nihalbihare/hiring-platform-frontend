
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
  
    <DreamJob/>
    <Companies/>
    <JobCategory/>
    <Working/>
    
    </div>
  )
}

export default HomePage
