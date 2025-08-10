import React from 'react'
import { talents } from '../Data/Data'
import TalentsCard from '../FindTalent/TalentsCard'
import { useParams } from 'react-router-dom'

const Recommended = (props:any) => {
  const {id} = useParams()
  return (
    <div>
        <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
        <div className='flex flex-col flex-wrap gap-5'>
          { props?.talents?.map((talent:any, index:any)=> index<4 && id !=talent.id&& <TalentsCard key={index} {...talent}/>)} 
          </div>
      
    </div>
  )
}

export default Recommended

