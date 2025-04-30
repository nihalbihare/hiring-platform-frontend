import { Button, Divider } from '@mantine/core'
import { IconArrowLeft, IconAtom } from '@tabler/icons-react'
import React from 'react'
import SignUp from '../SignUpLogin/SignUp'
import Login from '../SignUpLogin/Login'
import { useLocation, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className='min-h-[90vh]  bg-mine-shaft-950 font-["poppins"] overflow-hidden  '>
<Button my='md' className='!absolute left-5 cursor-pointer z-10 ' leftSection={<IconArrowLeft size={20}/>}
    onClick={()=>navigate("/")} variant='light' color='bright-sun.4'>Home</Button>
        <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000
           flex [&>*]:flex-shrink-0 ${location.pathname =='/sign-up'?'-translate-x-1/2' :'translate-x-0'}`}>
          <Login/>
        <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname =='/sign-up'? "rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900
         items-center justify-center gap-5 flex flex-col`}>
        <div className='flex gap-1 items-center text-bright-sun-400'>
        <IconAtom className='h-16 w-16' stroke={1.5} />
          <div className='text-6xl font-semibold'>hiring platfrom</div>
            </div>
            <div className='text-2xl font-semibold text-mine-shaft-200'>
              Find the job that's made for you</div>
            </div>
      <SignUp/>
      </div>
    </div>
  )
}

export default SignUpPage
