import React, { useEffect, useState } from 'react';
import {SelectInput} from './SelectInput'; // ✅ correct
import { field } from '../Data/Data';
import { Button, Checkbox, Textarea } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { useMediaQuery } from '@mantine/hooks';


const ExpInput = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state?.profile); 
  const [startDate , setStartDate] =  useState<Date | null>(new Date());
  const [endDate , setEndDate] =  useState<Date | null>(new Date());
  const matches = useMediaQuery('(max-width:475px)')

  const select = field;
  
  useEffect(() => {
    if (!props.add) {
      form.setValues({
        title: props.title,
        company: props.company,
        location: props.location,
        description: props.description,
        startDate : new Date(props.startDate),
        endDate : new Date(props.endDate),
        working: props.working,
      });
    }
  }, []);
  
  
  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: {
      title: '',
      company: '',
      location: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty('Title is required'),
      company: isNotEmpty('Company is required'),
      location: isNotEmpty('Location is required'),
      description: isNotEmpty('Description is required'),
    },
  });
  
  const handleSave =  () => {
  
    form.validate()
    if(!form.isValid()){
      return
    }
    let exp = [...profile.experience]
    if(props.add){
      exp.push(form.getValues())
      exp[exp.length-1].startDate = exp[exp.length-1].startDate.toISOString()
      exp[exp.length-1].endDate = exp[exp.length-1].endDate.toISOString()
    }
    else{
      exp[props.index] = form.getValues()
      exp[props.index].startDate = exp[props.index].startDate.toISOString()
      exp[props.index].endDate = exp[props.index].endDate.toISOString()
    }
    let updateProfile =  {...profile , experience : exp}
    dispatch(changeProfile(updateProfile))
    props.setEdit(false)
    successNotification('Success' , `Experience ${props.add?"Added":"Updated"}`)
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add ? 'Add' : 'Edit'} Experience</div>

      <div className="flex gap-10 xs-mx:flex-wrap xs-mx:[&>*]:w-full [&>*]:w-1/2">
        <SelectInput form={form} name="title" {...select[0]} />
        <SelectInput form={form} name="company" {...select[1]} />
      </div>

      <SelectInput form={form} name="location" {...select[2]} />

      <Textarea {...form.getInputProps('description')} 
        withAsterisk
        autosize
        minRows={3}
       
      />

      <div className="flex gap-10 [&>*]:w-2/3">
        <MonthPickerInput
          {...form.getInputProps('startDate')}
          withAsterisk
          maxDate={form.getValues().endDate || undefined}
          label="Start date"
          placeholder="Pick date"
        />

        <MonthPickerInput
          {...form.getInputProps('endDate')}
          disabled={form.getValues().working}
          withAsterisk
          minDate={form.getValues().startDate || undefined}
          label="End date"
          placeholder="Pick date"
       
        />
      </div>

      <div className="mt-3">
        <Checkbox
          {...form.getInputProps('working')}
          label="Currently working here"
          autoContrast
        />
      </div>

      <div className="flex gap-3 mt-3">
        <Button onClick={handleSave} size={matches?'xs':'sm'} variant="light" color="bright-sun.4">
          Save
        </Button>
        <Button onClick={() => props.setEdit(false)}size={matches?'xs':'sm'}  variant="outline" color="red.4">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
