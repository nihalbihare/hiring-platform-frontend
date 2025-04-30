import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { MultiSelect } from '../FindJobs/MultiSelect'
import { dropdownData } from '../Data/Data'
import SearchBar from '../FindJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../FindJobs/Jobs'

const FindJobs = () => {
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>

        <SearchBar />
        <Divider mx='md' size='xs' />
        <Jobs/>
           </div> 
         

  )
}

export default FindJobs
