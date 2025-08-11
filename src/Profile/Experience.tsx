import  { useState } from 'react'
import {  useSelector } from 'react-redux'
import { ActionIcon } from '@mantine/core'
import { IconPencil, IconPlus, IconX } from '@tabler/icons-react'
import ExpCard from './ExpCard'
import ExpInput from './ExpInput'
import { useMediaQuery } from '@mantine/hooks'

const Experience = () => {
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state?.profile)
    const [addExp, setAddExp] = useState(false)
       const matches = useMediaQuery('(max-width:475px)')
    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience
                <div className='flex  gap-2'>
                    <ActionIcon onClick={() => setAddExp(true)} color='bright-sun.4'  size={matches?'md':'lg'} variant="subtle" aria-label="Settings">
                        <IconPlus className='h-4/5 w-4/5' />
                    </ActionIcon>

                    <ActionIcon onClick={ handleEdit} color={edit ?'red.8' :'bright-sun.4'}  size={matches?'md':'lg'} variant="subtle" aria-label="Settings">
                        {edit ? <IconX className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>

                </div>
            </div>
            <div className='flex flex-col gap-8'>
                {
                    profile?.experience?.map((exp: any, index: number) => (
                        <ExpCard key={index} index ={index} {...exp} edit={edit} />
                    ))
                } 
                {addExp && < ExpInput add setEdit={setAddExp} />}
                {/* here add is a prop based on the set Edit and set Edit based on the setaddexp
       for showing add exp and edit exp on UI */}
            </div>
        </div>
    )
}

export default Experience

