import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core'
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import { SelectInput } from './SelectInput'
import { field } from '../Data/Data'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../Services/ProfileServices'
import Info from './Info'
import { setProfile } from '../Slices/ProfileSlice'
import About from './About'


const Profile = (props: any) => {
  const skills = ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js",
    "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]
  const [edit, setEdit] = useState([false, false, false, false, false])
  const [about, setAbout] = useState(props.about);
  const [addExp, setAddExp] = useState(false)
  const [addCerti, setAddCerti] = useState(false)
  const [skill, setSkill] = useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js",
    "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);
    const user = useSelector((state:any)=>state.user)
    const profile = useSelector((state:any)=>state.profile)
    const dispatch = useDispatch()


  const handleEdit = (index: any) => {
    const newEdit = [...edit]
    newEdit[index] = !newEdit[index]
    setEdit(newEdit)
    console.log(newEdit)
  }
  useEffect(() => {
   getProfile(user.id).then((data:any)=>{
    dispatch(setProfile(data))
   }).catch((error:any)=>{
    console.log( error);
   })
    

  }, [])


  return (
    <div className='w-4/5 mx-auto'>
      <div className='relative'>
        <img className='rounded-t-2xl' src="/banner.jpg" alt="" />
        <img className='rounded-full w-48 h-48 absolute
             -bottom-1/3 left-3 border-mine-shaft-950 border-8 cursor-pointer' src="/avatar.png" alt="" />
      </div>
      <div className='px-3 mt-20 cursor-pointer'>
       <Info/>

      </div>
      <Divider my='xl' />
      <About/>
     
      <Divider my='xl' />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills<ActionIcon onClick={() => 
          handleEdit(2)} color='bright-sun.4' size='lg' variant="subtle" aria-label="Settings">
          {edit[2] ? <IconDeviceFloppy className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
        </ActionIcon></div>

        {
          edit[2] ? <TagsInput data={[]} value={skill} onChange={setSkill} placeholder="Enter Skill"
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
      <Divider my='xl' />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience
          <div className='flex  gap-2'>
            <ActionIcon onClick={() => setAddExp(true)} color='bright-sun.4' size='lg' variant="subtle" aria-label="Settings">
              <IconPlus className='h-4/5 w-4/5' />
            </ActionIcon>

            <ActionIcon onClick={() => handleEdit(3)} color='bright-sun.4' size='lg' variant="subtle" aria-label="Settings">
              {edit[3] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
            </ActionIcon>

          </div>
        </div>
        <div className='flex flex-col gap-8'>
          {
            profile?.experience?.map((exp: any, index: number) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
            ))
          }
          {addExp && < ExpInput add setEdit={setAddExp} />}
          {/* here add is a prop based on the set Edit and set Edit based on the setaddexp
           for showing add exp and edit exp on UI */}
        </div>
      </div>
      <div className='px-3'>
        <Divider my='xl' />
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications   <div className='flex  gap-2'>
          <ActionIcon onClick={() => setAddCerti(true)} color='bright-sun.4' size='lg' variant="subtle" aria-label="Settings">
            <IconPlus className='h-4/5 w-4/5' />
          </ActionIcon>

          <ActionIcon onClick={() => handleEdit(4)} color='bright-sun.4' size='lg' variant="subtle" aria-label="Settings">
            {edit[4] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>

        </div>
        </div>
        <div className='flex flex-col gap-8'> {
          profile?.certification?.map((certi: any, index: number) => <CertiCard key={index} edit={edit[4]} {...certi} />)
        }

        </div>
        {
          addCerti && <CertiInput setEdit={setAddCerti} />
        }
      </div>
    </div>
  )
}

export default Profile
