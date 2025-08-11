
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import { Divider } from '@mantine/core'
import FindJobs from './Pages/FindJobs'
import FindTalent from './Pages/FindTalent'
import JobDescPage from './Pages/JobDescPage'
import ApplyJobPage from './Pages/ApplyJobPage'
import PostedJobPage from './Pages/PostedJobPage'
import SignUpPage from './Pages/SignUpPage'
import ProfilePage from './Pages/ProfilePage'
import TalentProfile from './Pages/TalentProfile'
import JobHistoryPage from './Pages/JobHistoryPage'
import CompanyPage from './Pages/CompanyPage'
import PostJobPage from './Pages/PostJobPage'
import HomePage from './Pages/HomePage'
import Footer from './Footer/Footer'
import ProtectedRoute from './Services/ProtectedRoutes'
import PublicRoute from './Services/PublicRoute'
import TermsAndCondition from './TermsAndCondition'
import Unauthorized from './Unauth'

const AppRoutes = () => {
 
  return (

       <BrowserRouter>
      <div className='relative'>
      <Header/>
      <Divider size='xs' mx='md' />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/find-jobs' element={<FindJobs/>}/>
        <Route path='/find-talent' element={<FindTalent/>}/>
        <Route path='/jobs-desc/:id' element={<JobDescPage/>}/>
        <Route path='/apply-job/:id' element={<ApplyJobPage/>}/>
        <Route path='/posted-jobs' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage/></ProtectedRoute>}/>
        <Route path='/posted-jobs/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage/></ProtectedRoute>}/>
        <Route path='/sign-up' element={<PublicRoute><SignUpPage/></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><SignUpPage/></PublicRoute>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/unauthorized' element={<Unauthorized/>} />
          <Route path="/terms" element={<TermsAndCondition />} />
        <Route path='/talent-profile/:id' element={<TalentProfile />}/>
        <Route path='/job-history' element={<ProtectedRoute allowedRoles={['APPLICANT']}><JobHistoryPage/></ProtectedRoute>}/>
        <Route path='/company/:name' element={<CompanyPage />}/>
         <Route path='/post-jobs' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage/></ProtectedRoute>}/>
        <Route path='/post-jobs/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
   
  )
}

export default AppRoutes
