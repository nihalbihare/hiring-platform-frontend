import { ActionIcon, TagsInput } from '@mantine/core'
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'
import { useMediaQuery } from '@mantine/hooks'


const Skills = () => {
    const dispatch = useDispatch()    
    const [edit ,setEdit] = useState(false)
    const profile =useSelector((state:any)=>state.profile)
    const [skills ,setSkills] = useState <string[]>([])
    const matches = useMediaQuery('(max-width:475px)')

    const handleEdit =()=>{
     if(!edit){
         setEdit(true)
         setSkills(profile.skills || [])
     }
     else{
         setEdit(false)
        
          
     }
 }
 const handleSave =() =>{
let updateProfile = { ...profile, skills: skills } //It creates a new object that has all the properties of the profile object.
//Then, it adds or replaces the skills property with the value from the skills variable.
   dispatch(changeProfile(updateProfile))
   console.log(updateProfile)
   successNotification("Updated", "Skills Updated Successfully")
 }
  return (
    <div className='px-3'>
    <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills <div> {edit && <ActionIcon onClick={handleSave} color='green.8' size='lg' variant="subtle" aria-label="Settings">
                <IconCheck className='h-4/5 w-4/5 ' /> 
              </ActionIcon>}
              <ActionIcon onClick={handleEdit} color={edit ?'red.8' :'bright-sun.4'} size={matches?'md':'lg'} variant="subtle" aria-label="Settings">
                {edit ? <IconX className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
              </ActionIcon></div></div>

    {
      edit ? <TagsInput data={[]} value={skills} onChange={setSkills} placeholder="Enter Skill"
        splitChars={[',', ' ', '|']} /> :
        <div className='flex flex-wrap gap-2'>
          {
           profile?.skills?.map((skill:any, index:number) => <div key={index}
              className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl
     text-bright-sun-400
    px-3 py-1'> {skill} </div>)
          }
        </div>
    }
  </div>
  )
}

export default Skills
