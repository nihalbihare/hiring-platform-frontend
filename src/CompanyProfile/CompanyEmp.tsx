import React from 'react'
import { talents } from '../Data/Data'
import TalentsCard from '../FindTalent/TalentsCard'

const CompanyEmp = () => {
  return (
    <div className='mt-10 flex flex-wrap gap-7 px-6  '>
    {talents.map((talent, index)=> 
     index < 8 &&   <TalentsCard  key={index} {...talent}/>)}
      
    </div>
  )
}

export default CompanyEmp
