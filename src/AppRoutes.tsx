import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
import { useSelector } from 'react-redux'

const AppRoutes = () => {
    const user = useSelector((state :any)=>state.user)
  return (

       <BrowserRouter>
      <div className='relative'>
      <Header/>
      <Divider size='xs' mx='md' />
      <Routes>
        <Route path='/find-jobs' element={<FindJobs/>}/>
        <Route path='/find-talent' element={<FindTalent/>}/>
        <Route path='/jobs-desc' element={<JobDescPage/>}/>
        <Route path='/apply-job' element={<ApplyJobPage/>}/>
        <Route path='/posted-jobs' element={<PostedJobPage/>}/>
        <Route path='/sign-up' element={user?<Navigate to='/'/>:<SignUpPage/>}/>
        <Route path='/login' element={user?<Navigate to='/'/>:<SignUpPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/talent-profile' element={<TalentProfile />}/>
        <Route path='/job-history' element={<JobHistoryPage/>}/>
        <Route path='/company' element={<CompanyPage />}/>
        <Route path='/post-jobs' element={<PostJobPage/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
   
  )
}

export default AppRoutes
