import { ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { successNotification } from '../Services/NotificationService'
import { changeProfile } from '../Slices/ProfileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate } from '../Services/Utilities'

const CertiCard = (props:any) => {
  const dispatch = useDispatch()
  const profile = useSelector((state :any)=>state.profile) // state is a entire redux state object
  const handleDelete = () => {
    // Step 1: Create a copy of the certification array from the profile object
    let certi = [...profile.certification];
  
    // Step 2: Remove one item at the given index (props.index) from the array
    certi.splice(props.index, 1);
  
    // Step 3: Create a new profile object with the updated certification array
    let updateProfile = { ...profile, certification: certi };
  
    // Step 4: Dispatch the updated profile to the Redux store (or state management)
    dispatch(changeProfile(updateProfile));
  
    // Step 5: Show a success notification
    successNotification("Deleted", "Certification Deleted Successfully");
  }
  
  return (

        <div className='flex justify-between sm-mx:flex-wrap'>
            <div className='flex gap-2 items-center  '>
                <div className=' p-2 bg-mine-shaft-800 rounded-md flex-shrink-0' >
                    <img className='h-7' src={`Icons/${props.issuer}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>{props.name}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.issuer}</div>
                </div>
            </div>
            <div className='flex items-center gap-3 '>
         <div className='flex flex-col items-end sm-mx:flex-row sm-mx:gap-3'>
           <div className='text-sm text-mine-shaft-300'>{formatDate(props.issueDate)}</div>
           <div className='text-sm text-mine-shaft-300'> ID: {props.certificateID}</div>
         </div>
         {props.edit && <ActionIcon  color='red.8' size='lg' variant="subtle" aria-label="Settings">
            <IconTrash onClick={handleDelete}  className='h-4/5 w-4/5' stroke={1.5} />
          </ActionIcon>}

         </div>
        </div>
  

  )
}

export default CertiCard
