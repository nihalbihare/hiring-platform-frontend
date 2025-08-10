import { IconAtom, IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import React from 'react'
import { footerlinks } from '../Data/Data'
import { useLocation } from 'react-router-dom'

const Footer = () => {
   const location = useLocation()
   return (
     location.pathname !="/sign-up" && location.pathname != '/login' ? 
     <div className='pt-20 pb-5 flex gap-8 flex-wrap justify-around bg-mine-shaft-950 font-["poppins"]'>

      {/* Logo & description */}
      <div className='w-1/4 sm-mx:w-1/3 xs-mx:w-1/2 xsm-mx:w-full flex flex-col gap-4 '>
        <div className='flex gap-1 items-center text-bright-sun-400'>
          <IconAtom className='h-6 w-6' stroke={1.5} />
          <div className='text-xl font-semibold'>Hiring Platform</div>
        </div>
        <div className='text-sm text-mine-shaft-300'>
          Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
        </div>

        {/* Social Icons */}
        <div className='flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900
          [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700'>
          <div><IconBrandFacebook /></div>
          <div><IconBrandInstagram /></div>
          <div><IconBrandX /></div>
        </div>
      </div>

      {/* Footer Links */}
      {footerlinks.map((item, index) => (
        <div key={index}>
          <div className='text-lg font-semibold text-bright-sun-400 mb-4'>{item.title}</div>
          {item.links.map((link, index) => (
            <div
              key={index}
              className='text-mine-shaft-300 text-sm
               hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2
                transition duration:ease-in-out'  >
              {link}
            </div>
          ))}
        </div>
      ))}

    </div>:<></>
  )
}

export default Footer
