import React, { useState } from 'react'
import { MultiSelect } from './MultiSelect'
import { Button, Collapse, Divider, RangeSlider } from '@mantine/core'
import { dropdownData } from '../Data/Data'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../Slices/FilterSlice'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'



const SearchBar = () => {
  const matches = useMediaQuery('(max-width:475px)')
   const [value, setValue] = useState<[number, number]>([1, 300]);  
    const [opened, { toggle }] = useDisclosure(false);
  const dispatch = useDispatch()
  const handleChange =(event:any)=>{
      dispatch(updateFilter({salary:event}))
    
  


  }
  return (
    <div>
      <div className='flex justify-end'>
       {matches&&<Button onClick={toggle} className='align'
         color='bright-sun.4'm='sm' radius='lg' autoContrast variant='outline'>{opened?"Close":"Filter"}
         </Button>}
      </div>
      <Collapse in={(opened || !matches)}>
    <div className="flex lg-mx:!flex-wrap items-center
     !text-mine-shaft-100 px-5 py-8 gap-y-6">
      {dropdownData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5 lg-mx:w-1/4 xs-mx:w-full bs-mx:w-[30%] sm-mx:w-[48%]">
            <MultiSelect {...item} />
          </div>
          <Divider className='sm-mx:hidden' mr="xs" size="xs" orientation="vertical" />
        </React.Fragment>
      ))}
    <div className='w-1/5  lg-mx:w-1/4 max-lg:mt-7
     [&_.mantine-Slider-label]:!translate-y-10 bs-mx:w-[30%]
      sm-mx:w-[48%]'>
    <div className='flex justify-between text-sm'>
    <div>Salary </div>
    <div >&#8377;{value[0]} LPA - &#8377;{value[1]} LPA </div>
    </div>
    <RangeSlider  onChangeEnd={(e)=>handleChange( e)} minRange={1}
     color='bright-sun.4' size='xs' value={value} min={1} max={100}
     labelTransitionProps={{
      transition: 'skew-down',
      duration: 150,

      timingFunction: 'linear',
    }}
  onChange={setValue} />
    </div>
  </div>
  </Collapse>
  </div>
)
}

export default SearchBar
