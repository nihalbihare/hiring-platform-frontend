import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import userService from "../Services/Services";
import signUpValidation from '../Services/FormValidation';
import { notifications } from '@mantine/notifications';


 const form ={
  name : "",
  email : "",
  password : "",
  confirmPassword : "",
  accountType : "APPLICANT"
 }
const SignUp = () => {
  const [data, setdata] = useState<{[key:string]:string}>(form)
  const [formError, setFormError] = useState<{[key:string]:string}>(form)
  const navigate = useNavigate()
  const [loading , setLoading] = useState(false)
  const handleChange = (event : any)=>{
  if(typeof(event) == 'string')
    { setdata({...data , accountType:event})
  return
}
  
  let name = event.target.name,
  value = event.target.value
  setdata({...data , [name]:value});
  setFormError({...formError , [name]:signUpValidation(name, value)})

  if(name == "password" && data.confirmPassword !== ""){
    let err = ""
    if(data.confirmPassword !== value ){ // for validation of confirem pass and pass
      err = "Password do not match"
      setFormError({...formError , [name]:signUpValidation(name, value) , confirmPassword : err})
    }
    else{
      setFormError({...formError ,confirmPassword:""})
    }
 }
  if(name ==="confirmPassword"){
    if(data.password !== value){
      setFormError({...formError , [name]:"Password do not match"})
    }
    else{
    setFormError({...formError ,confirmPassword:""})
    }
  }
}

  const handleSubmit =()=>{

    let valid = true,
     newFormError:{[key:string]:string}={} // temp store error validation error message 
    for(let key in data){
      if(key === "accountType") continue;
      if(key !== "confirmPassword") newFormError[key] = signUpValidation(key, data[key]) 
        else if(data[key]!== data["password"]) newFormError[key] ="Password do not match"
         if(newFormError[key]) valid =false
    }
    setFormError(newFormError)

    if(valid == true){
      setLoading(true)
      userService.registerUser(data)
      .then((res)=>{
        setdata(form)
        notifications.show({
          title: 'Registered sucessfully',
          message: 'Redirecting to the login page... ',
          withCloseButton : true,
          icon:<IconCheck style={{width:"90%" , height:"90%"}}/>,
          color:'teal',
          withBorder:true,
          className:"!border-green-500"
         
        })
        setTimeout(() => {
          setLoading(false)
          navigate("/login")
          
        }, 3000);
      
        console.log(res.data)
      }).catch((err) => {
        setLoading(false)
        console.log(err);
        notifications.show({
          title: 'Registration failed',
          message: err.response?.data?.errorInfo ,
          withCloseButton: true,
          icon: <IconX style={{ width: "90%", height: "90%" }} />,
          color: 'red',
          withBorder: true,
          className: "!border-red-500"
        });
      });
      
    }
    
  }



  return (
     <>
        <LoadingOverlay
              visible={loading}
              zIndex={1000}
              className='translate-x-1/2'
              overlayProps={{ radius: 'sm', blur: 2 }}
              loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
            />
<div className='w-1/2 h-full px-20 pt-16 sm-mx:py-20 sm-mx:w-full flex flex-col bs-mx:px-10 md-mx:px-5 gap-4'>

    <div className='text-2xl font-semibold  '>
        Create Account
    </div>
    <TextInput value={data.name} name='name' onChange={handleChange} error={formError.name}  withAsterisk
      label="Name"  placeholder="Enter Your Full Name"
    />
    <TextInput value={data.email} name='email'  onChange={handleChange} 
    error={formError.email}
    withAsterisk leftSectionPointerEvents="none" leftSection={
         <IconAt style={{width: rem(16) , height: rem(16)}} />} label="Your email"
        placeholder="Enter Your email"
      />
          <PasswordInput value={data.password} name='password'  onChange={handleChange} 
          error={formError.password} withAsterisk leftSection={ <IconLock style={{width: rem(18)
           , height: rem(18)}} stroke={1.5} />} 
          label="Password"
           placeholder="Enter Password" />

<PasswordInput withAsterisk value={data.confirmPassword} name='confirmPassword'
  onChange={handleChange}  error={formError.confirmPassword}
   leftSection={ <IconLock style={{width: rem(18) 
, height: rem(18)}} stroke={1.5} />} 
          label="Confirm  Password"
           placeholder="Enter Password" />
              <Radio.Group
     value={data.accountType}
     onChange={handleChange}
     label="Are you?"
     withAsterisk
    >
      <Group mt="xs" >
        <Radio className='py-4 px-6 border hover:bg-mine-shaft-900 
         has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400
                   border-mine-shaft-800 rounded-lg '
          autoContrast value="APPLICANT" label="Applicant" />
        <Radio  className='py-4 px-6 border hover:bg-mine-shaft-900 
         has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400
                   border-mine-shaft-800 rounded-lg '
                    autoContrast value="EMPLOYER" label="Employer" />
      </Group>
    </Radio.Group>

<Checkbox autoContrast label={<>I accept {' '} <Anchor href='/terms'>terms & conditions</Anchor></>}
    />
    <Button loading={loading} onClick={handleSubmit} autoContrast variant='filled'>Sign Up</Button>
    <div className='mx-auto '>Have an account <span onClick={()=>{navigate('/login'); setdata(form)
      setFormError(form)
    }}
     className='text-bright-sun-400 hover:underline cursor-pointer' >Login</span></div>
    </div></>
  )
}


export default SignUp
