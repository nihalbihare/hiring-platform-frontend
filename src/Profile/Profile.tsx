import {  Avatar,  Divider, FileInput, Overlay } from '@mantine/core'
import { IconEdit} from '@tabler/icons-react' 
import { useDispatch, useSelector } from 'react-redux'
import Info from './Info'
import { changeProfile} from '../Slices/ProfileSlice'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Certificate from './Certificate'
import { useHover } from '@mantine/hooks'
import { successNotification } from '../Services/NotificationService'
import { getBase64 } from '../Services/Utilities'


const Profile = (props:any) => {

     const profile = useSelector((state: any) => state.profile)
  const dispatch = useDispatch()
  const { hovered, ref } = useHover();

  const handleFileChange =async (image : any) =>{
    let picture :any = await getBase64(image) 
    let updateProfile = {...profile , picture : picture.split(',')[1] } // for their it shows the extra URL 
    // which is not valid for that we do split 
     dispatch(changeProfile(updateProfile))
            successNotification("Success" , "Profile Picture Updated Successfully")

  }


  return (
    <div className='w-4/5 lg-mx:w-full mx-auto'>
      <div>
      <div className='relative px-5'>
    <img className="rounded-t-2xl xs:h-50" src="/banner.jpg" alt="" />
        <div ref={ref} className=' absolute
             -bottom-1/3 left-3 flex items-center justify-center 
             !rounded-full md-mx:-bottom-10 sm-mx:-bottom-16 '>

          <Avatar
            className=' !w-48 !h-48 rounded-full  border-mine-shaft-950 
          border-8 cursor-pointer  md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!w-32 xs-mx:!h-32'
            src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="" />
          {hovered && <Overlay className='!rounded-full'
            color="#000" backgroundOpacity={0.85} />}
          {hovered && <IconEdit  className='absolute !w-16 !h-16 z-[300]' />}
          {hovered && (
            <FileInput
            onChange={handleFileChange}
              size='lg'
              className='absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full !h-full !w-full'
              variant='transparent'
       
              accept='image/png,image/jpeg'
            />
          )}

        </div>
      </div>
      </div>
      <div className='px-3 mt-20 cursor-pointer'>
        <Info />

      </div>
      <Divider my='xl' />
      <About />

      <Divider my='xl' />
      <Skills />
      <Divider my='xl' />
      <Experience />
      <div className='px-3'>
        <Divider my='xl' />
        <Certificate />

      </div>
    </div>
  )
}

export default Profile
