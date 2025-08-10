import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLinks = () => {
  const links = [
    { name: 'find Jobs', url: 'find-jobs' },
    { name: 'find Talent', url: 'find-talent' },
    { name: 'post Jobs', url: 'post-jobs/0' },
    { name: 'Posted Jobs', url: 'posted-jobs/0' },
    { name: 'Job History', url: 'job-history' },
    // { name: 'Sign Up', url: 'sign-up' }
  ];

  const location = useLocation();

  return (
    <div className='flex gap-5 bs-mx:hidden text-mine-shaft-300 h-full items-center'>
      {links.map((link, index) => (
        <div
          key={index}
          className={`flex items-center border-t-[3px] h-full ${
            location.pathname === '/' + link.url
              ? 'border-t-bright-sun-400 text-bright-sun-400'
              : 'border-transparent'
          }`}
        >
          <Link to={`/${link.url}`} className='px-2'>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavLinks;
