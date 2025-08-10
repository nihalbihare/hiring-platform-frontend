import React, { useState } from 'react'
import { Button, Collapse, Divider,  Input,  RangeSlider } from '@mantine/core'
import { MultiSelect } from '../FindJobs/MultiSelect'
import { searchFields } from '../Data/Data'
import { IconUserCircle } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../Slices/FilterSlice'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'



const SearchBar = () => {
   const matches = useMediaQuery('(max-width:475px)')
      const [opened, { toggle }] = useDisclosure(false);
   const [value, setValue] = useState<[number, number]>([1, 50]);  
   const [name , setName] = useState('')
  const dispatch = useDispatch()
  const handleChange =(name:any , event:any)=>{
    if(name == 'exp'){
      dispatch(updateFilter({exp:event}))
    }
    else{
      setName(event.target.value)
   dispatch(updateFilter({name:event.target.value}))
    }


  }
 
  return (
      <div>
        <div className='flex justify-end'>
      {matches && <Button onClick={toggle} className='align'
        color='bright-sun.4' m='sm' radius='lg' autoContrast variant='outline'>{opened ? "Close" : "Filter"}
      </Button>}
    </div><Collapse in={(opened || !matches)}>
    <div className=' px-5 py-8 gap-y-6 flex lg-mx:!flex-wrap items-center text-mine-shaft-100'>
        <div className='flex items-center'>
          <div className='text-bright-sun-400 bg-mine-shaft-900 
          rounded-full p-1 mr-2'>
            <IconUserCircle />
          </div>
          <Input onChange={(e) => { handleChange("name", e) } }
            className='[&_input]:!placeholder-mine-shaft-300 ' variant="unstyled" placeholder="Talent Name" />
        </div>
        {searchFields.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="w-1/5 lg-mx:w-1/ xs-mx:w-full 4 bs-mx:w-[30%] sm-mx:w-[48%]">
                    <MultiSelect {...item} />
                  </div>
                  <Divider className='sm-mx:hidden' mr="xs" size="xs" orientation="vertical" />
                </React.Fragment>
              ))}
        <div className='w-1/5  lg-mx:w-1/4 max-lg:mt-7
     [&_.mantine-Slider-label]:!translate-y-10 bs-mx:w-[30%]
      sm-mx:w-[48%]'>
          <div className='flex justify-between text-sm'>
            <div>Experience(Years)</div>
            <div>{value[0]}  - {value[1]}  </div>
          </div>
          <RangeSlider onChangeEnd={(e) => handleChange("exp", e)} minRange={1} color='bright-sun.4' size='xs' value={value} min={1} max={50}
            labelTransitionProps={{
              transition: 'skew-down',
              duration: 150,
              timingFunction: 'linear',
            }}
            onChange={setValue} />
        </div>
      </div></Collapse ><div />
      </div>
)
}

export default SearchBar
