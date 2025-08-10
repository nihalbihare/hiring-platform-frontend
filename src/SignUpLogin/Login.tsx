import { Anchor, Button, Checkbox, LoadingOverlay, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {loginUser} from "../Services/AuthService";
import { loginValidation } from '../Services/FormValidation';
import { useDisclosure } from '@mantine/hooks';
import ResetPassword from './ResetPassword';
import { useDispatch } from 'react-redux';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { setJwt } from '../Slices/JwtSlice';
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../Slices/UserSlice';




const form ={
    email : "",
    password : ""
}
const Login = () => {
      const [data, setdata] = useState(form)
      const navigate = useNavigate()
        const [formError, setFormError] = useState<{[key:string]:string}>(form)
        const [opened, { open, close }] = useDisclosure(false);
        const dispatch = useDispatch()
        const [loading , setLoading] = useState(false)
      const handleChange = (event : any)=>{
        setFormError({...formError ,[event.target.name]:""})
         setdata({...data , [event.target.name]:event.target.value})
        }
         const handleSubmit =()=>{
          setLoading(true)
          let valid = true;
          const newFormError: { [key: string]: string } = {};
        
          for (let key in data) {
            const typedKey = key as keyof typeof data; //Tell TypeScript that key is a real key of the data 
            // object (like 'email' or 'password').
            newFormError[typedKey] = loginValidation(typedKey, data[typedKey]) ;
            if (newFormError[typedKey]) valid = false;
          } 
          setFormError(newFormError);
          if(valid){
          loginUser(data)
          .then((res)=>{
              setLoading(false)
             successNotification("Login successfully" , 
              "Redirecting to home page")
              dispatch(setJwt(res.jwt))
              const decoded = jwtDecode(res.jwt)
              dispatch(setUser({...decoded , email:decoded.sub}))
              console.log(decoded)
              setTimeout(() => {
                navigate("/")
                
              }, 3000);
              console.log(res)
            }).catch((err) => {
              setLoading(false)
              console.log(err);
             errorNotification("Login failed",  err.response?.data?.errorInfo,)
            });
          }
          }

      
  return (
    <>
    <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
      <div className='w-1/2 px-20 sm-mx:w-full flex flex-col bs-mx:px-10 md-mx:px-5 justify-center gap-4'>
       <div className='text-2xl font-semibold  '>
           Login
       </div>
       <TextInput value={data.email} name='email' error={formError.email} onChange={handleChange} withAsterisk leftSectionPointerEvents="none" leftSection={
            <IconAt style={{width: rem(16) , height: rem(16)}} />} label="Your email"
           placeholder="Your email"
         />
             <PasswordInput  value={data.password}  error={formError.password} onChange={handleChange} name='password' withAsterisk leftSection={
                 <IconLock style={{width: rem(18) , height: rem(18)}} stroke={1.5} />} 
             label="Password"
              placeholder="Enter Password" />

   
   <Checkbox autoContrast label={<>I accept {' '} <Anchor href='/terms'>terms & conditions</Anchor></>}
       />
       <Button loading={loading} onClick={handleSubmit} autoContrast variant='filled'>Login</Button>
       <div className='mx-auto'>Don't Have an account  <span onClick={()=>{navigate('/sign-up'); setdata(form) 
   setFormError(form)
    }}
       className='text-bright-sun-400 hover:underline cursor-pointer' >Sign Up</span></div>
       <div className='text-bright-sun-400 hover:underline cursor-pointer text-center'
       
       onClick={open} >Forget password</div>
       </div>

       <ResetPassword opened={opened} close={close} />
       </>
  )
}

export default Login
