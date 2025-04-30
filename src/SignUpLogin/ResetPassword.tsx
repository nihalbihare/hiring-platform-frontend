import { Button, Modal, PasswordInput, PinInput, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import React, { useState } from 'react'
import { changePass, sendOtp, verifyOtp } from '../Services/Services';
import signUpValidation from '../Services/FormValidation';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { useInterval } from '@mantine/hooks';

const ResetPassword = (props :any) => {
    const [email ,setEmail] = useState("");
    const [otpSent  , setOtpSend] = useState(false)
    const [verfied ,setVerfied] = useState(false)
    const [passErr , setPassErr] = useState('')
    const [password , setPassword] =useState('')
    const [otpSending , setOtpSending] = useState(false)
    const [resendLoader , setResendLoader] = useState(false)
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if (seconds === 0) {
            setResendLoader(true);
            setSeconds(60);
            interval.stop();
        } else {
            setSeconds((s) => s - 1);
        }
    }, 1000); // Added interval duration as the second argument
        


const handleSendOtp =() =>{
    setOtpSending(true)
    sendOtp(email)
    .then((res)=>{
        console.log(res)
        successNotification("Otp send successfully",
             "Enter otp to reset.")
        setOtpSending(false)
        setOtpSend(true)
        interval.start()
        setResendLoader(true)
    }).catch((err)=>{
        console.log(err)
        setOtpSending(false)
        errorNotification("Otp sending failed", err.response?.data?.errorInfo )
    })
}
const handleVerifyOtp = (otp:string)=>{
    verifyOtp(email, otp).then((res)=>{
        console.log(res)
        setVerfied(true)
    }).catch((err)=>{
        console.log(err)
    })

}
const resendOtp =()=>{
    if(resendLoader) return
    handleSendOtp()
    
 
}

const handleResetPassword =()=>{
    changePass(email , password).then((res)=>{
        console.log(res);
        successNotification("Password changed " , "login with new password")
        props.close()
    }).catch((err)=>{
        console.log(err);
        errorNotification("Password reset failed" ,  err.response?.data?.errorInfo )
    })
 
}
const changeEmail =()=>{
    setOtpSend(false) // it delete all previous config. when set false
    setSeconds(60)
    setVerfied(false)
    interval.stop()
    
}


  

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        <TextInput value={email} name='email' size='md' onChange={(e)=>setEmail(e.target.value)}
         withAsterisk leftSectionPointerEvents="none" 
         leftSection={<IconAt size={16}/>} label="Your email"
           placeholder="Enter your email" rightSection={ 
           <Button loading={otpSending} 
           disabled ={email === "" || otpSent} 
           onClick={handleSendOtp} color='bright-sun.4' className='mr-1' size='xs' 
            autoContrast variant='filled'>Send otp</Button>}
            rightSectionWidth='xl'
         />
         <div className='flex mt-5'>
        {otpSent&&<PinInput size="md" onComplete={handleVerifyOtp} 
        length={6} type="number" className='mx-auto' gap='lg' />}
        </div>
          
       { otpSent && !verfied && <div className='flex gap-2 mt-5'>
        <Button fullWidth loading={otpSending} onClick={resendOtp}
        color='bright-sun.4' className='mr-1' size='xs' 
            autoContrast variant='outline'>{resendLoader?seconds:"Resend otp"}</Button>
              <Button fullWidth loading={otpSending && !sendOtp} onClick={changeEmail } 
        color='bright-sun.4' className='mr-1' size='xs' 
            autoContrast variant='filled' >Change Email</Button>
        </div>}
        <div >
        {verfied && <PasswordInput  value={password} 
         error={passErr} onChange={(e)=>{setPassword(e.target.value);
            setPassErr(signUpValidation("password",e.target.value))}} 
         name='password' withAsterisk leftSection={
                 <IconLock size={16}  />} 
             label="Password"
              placeholder="Enter Password" />}
              <div className='mt-4'>
               {verfied && <Button fullWidth  onClick={handleResetPassword} 
            autoContrast variant='filled'>Change password</Button>}
            </div>
        </div>
  </Modal> 
  )
}

export default ResetPassword
