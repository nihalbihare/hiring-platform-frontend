import React, { useState } from 'react'
import { SelectInput } from './SelectInput'
import { field } from '../Data/Data'
import { Button, Checkbox, Textarea } from '@mantine/core'
import { MonthPicker, MonthPickerInput } from '@mantine/dates'

const ExpInput = (props: any) => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [checked, setChecked] = useState(false);

    const [desc, setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.")
    const select = field
    return (
        <div className='flex flex-col gap-3'>
            <div className='text-lg font-semibold'> {props.add?"Add":"Edit"} Experience</div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput  {...select[2]} />
            < Textarea
            withAsterisk
                autosize
                minRows={3}
                value={desc}
                onChange={(event) => setDesc(event.currentTarget.value)}
            />
            <div className='flex gap-10 [&>*]:w-2/3'>
                <MonthPickerInput withAsterisk maxDate={endDate || undefined}  label="Start date"  placeholder="Pick date"   value={startDate}
                    onChange={setStartDate}
                />
                <MonthPickerInput disabled={checked} withAsterisk minDate={startDate || undefined}  label="End date"  placeholder="Pick date"   value={endDate}
                    onChange={setEndDate}
                />
            </div>
            <div className='mt-3'>
            <Checkbox
  checked={checked}
  onChange={(event) => setChecked(event.currentTarget.checked)}
      defaultChecked
      label="Currently working here"
      autoContrast
    />
    </div>

    <div className='flex gap-3 mt-3'>
            <Button onClick={()=> props.setEdit(false)} variant='light' color='bright-sun.4'>Save</Button>
            <Button onClick={()=> props.setEdit(false)} variant='outline' color='red.4'>Cancel</Button>
          </div>


        </div>

    )
}

export default ExpInput
