import React from 'react'
import { formatDate } from '../Services/Utilities'

const CertiCard = (props:any) => {
  return (

        <div className='flex justify-between sm-mx:flex-wrap'>
            <div className='flex gap-2 items-center  '>
                <div className=' p-2 bg-mine-shaft-800 rounded-md flex-shrink-0' >
                    <img className='h-7' src={`/Icons/${props.issuer}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>{props.name}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.issuer}</div>
                </div>
            </div>
         <div className='flex flex-col items-end  sm-mx:flex-row sm-mx:gap-3'>
           <div className='text-sm text-mine-shaft-300'>{formatDate(props.issueDate)}</div>
           <div className='text-sm text-mine-shaft-300'> ID: {props.certificateID}</div>
         </div>
        </div>
  

  )
}

export default CertiCard
