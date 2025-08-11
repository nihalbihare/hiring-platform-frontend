import { ActionIcon, NumberInput } from '@mantine/core';
import { IconBriefcase, IconCheck, IconMapPin, IconPencil, IconX } from '@tabler/icons-react';
import  { useState } from 'react';
import { field } from '../Data/Data'; // Assuming 'field' contains the necessary data, including icon components
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { SelectInput } from './SelectInput';
import { useMediaQuery } from '@mantine/hooks';



const Info = () => {
  const select = field;
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);
  const matches = useMediaQuery('(max-width:475px)')

  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location: '', totalExp: 1 },
  });

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
        totalExp: profile.totalExp,
      });
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    let updateProfile = { ...profile, ...form.getValues() };
    dispatch(changeProfile(updateProfile));
    console.log(updateProfile);
    successNotification('Updated', 'Profile Updated Successfully');
  };

  return (
    <div>
      <div className='text-3xl xs-mx:text-2xl font-semibold flex justify-between'>
        {user?.name}
        <div>
          {edit && (
            <ActionIcon onClick={handleSave} color='green.8' size={matches?'md':'lg'} variant='subtle' aria-label='Settings'>
              <IconCheck className='h-4/5 w-4/5 ' />
            </ActionIcon>
          )}
          <ActionIcon onClick={handleEdit} color={edit ? 'red.8' : 'bright-sun.4'}  size={matches?'md':'lg'} variant='subtle' aria-label='Settings'>
            {edit ? <IconX className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
          </ActionIcon>
        </div>
      </div>

      {edit ? (
        <>
          <div className='flex gap-10 [&>*]:w-2/3'>
            <SelectInput form={form} name='jobTitle' {...select[0]} />
            <SelectInput form={form} name='company' {...select[1]} />
          </div>
            <div className='flex gap-10 [&>*]:w-2/3'>
          <SelectInput form={form} name='location' {...select[2]} />
          <NumberInput withAsterisk label='Experience' placeholder='Enter Your Experience Betweeen (1 to 50) years '  hideControls clampBehavior='strict'
          min={1} max={50}  {...form.getInputProps('totalExp')} />
          </div>
        </>
      ) : (
        <>
          <div className='flex gap-1 items-center text-xl xs-mx:text-base'>
            <IconBriefcase className='h-5 w-5 ' stroke={1.5} />
            {profile.jobTitle}&bull; {profile.company}
          </div>
          <div className=' flex gap-1 items-center text-lg xs-mx:text-base text-mine-shaft-400'>
            <IconMapPin className='h-5 w-5' stroke={1.5} /> {profile.location}
          </div>
          <div className=' xs-mx:text-base flex gap-1 items-center text-lg text-mine-shaft-400'>
            <IconBriefcase className='h-5 w-5' stroke={1.5} />Experience: {profile.totalExp} Years
          </div>
        </>
      )}
    </div>
  );
};

export default Info;