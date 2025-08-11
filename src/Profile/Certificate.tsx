import { ActionIcon } from '@mantine/core'
import { IconPencil, IconPlus, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CertiInput from './CertiInput'
import CertiCard from './CertiCard'
import { useMediaQuery } from '@mantine/hooks'

const Certificate = () => {
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state?.profile)
      const [addCerti, setAddCerti] = useState(false)
      const matches = useMediaQuery('(max-width:475px)')
    const handleEdit =()=>{
        setEdit(!edit)

    }
  return (
    <div>
         <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications   <div className='flex  gap-2'>
          <ActionIcon onClick={() => setAddCerti(true)} color='bright-sun.4' size={matches?'md':'lg'} variant="subtle" aria-label="Settings">
            <IconPlus className='h-4/5 w-4/5' />
          </ActionIcon>

          <ActionIcon onClick={handleEdit}  color={edit ?'red.8' :'bright-sun.4'}  size={matches?'md':'lg'} variant="subtle" aria-label="Settings">
            {edit ? <IconX className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>

        </div>
        </div>
        <div className='flex flex-col gap-8'> {
          profile?.certification?.map((certi: any, index: number) => <CertiCard key={index} 
           edit={edit} index = {index} {...certi} />)// passing the 
           // index  because if we want to access the the object for updation and deletion 
        }

        </div>
        {
          addCerti && <CertiInput setEdit={setAddCerti} />
        }
      </div>
      
  )
}

export default Certificate
