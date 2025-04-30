import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import Talents from '../FindTalent/Talents'


const FindTalent = () => {
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
        <SearchBar/>
        <Divider mx='md' size='xs' />
        <Talents/>
      
    </div>
  )
}

export default FindTalent
