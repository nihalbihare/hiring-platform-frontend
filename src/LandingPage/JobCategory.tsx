import React from 'react'
import { Carousel } from '@mantine/carousel'
import { jobCategories } from '../Data/Data'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'


const JobCategory = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-4xl font-semibold mb-3
         text-mine-shaft-100 text-center md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl'>Browse <span  className='text-bright-sun-400'>Job </span>Catagory</div>
         <div className='text-lg mb-10 mx-auto text-mine-shaft-300  sm-mx:text-base xs-mx:text-sm 
         sm-mx:w-11/12 w-1/2'> Explore diverse job oportunity tailored to your skills.
          Start your career journey today!</div>
          <Carousel slideSize="22%"  slideGap="md" loop
          className='focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button] :border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100'
           
           nextControlIcon={<IconArrowRight className='h-8 w-8'  />}
           previousControlIcon={<IconArrowLeft  className='h-8 w-8' />}
         >
            {
            jobCategories.map((category, index) => (
              <Carousel.Slide key={index}>
                <div className='flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer  hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 my-5 transition duration-300 ease-in-out'>
                  <div className='bg-bright-sun-300 rounded-full'>
                    <img className='h-8 w-8' src={`/Category/${category.name}.png`} alt={category.name} />
                  </div>
                  <div className='text-mine-shaft-100 font-semibold text-xl sm-mx:text-lg xs-mx:text-base'>{category.name}</div>
                  <div className='text-sm text-mine-shaft-300 text-center'>{category.description}</div>
                  <div className='text-bright-sun-300 text-lg sm-mx:text-base xs-mx:text-sm'>{category.jobCount}</div>
                </div>
              </Carousel.Slide>
            ))
            }
    
    </Carousel>
    </div>
  )
}

export default JobCategory
