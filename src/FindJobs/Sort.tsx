import { useState } from 'react';
import {  Combobox, useCombobox,  ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateSort } from '../Slices/SortSlice';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];
const  talentSort  = ['Relevance' , 'Experience (Low to High)' ,'Experience (High to Low)']

export const Sort=(props:any)=> {
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort=='job'? opt.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  )):talentSort.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        size='xs'
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val))
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div onClick={()=> combobox.toggleDropdown()} className='cursor-pointer xs-mx:text-xs  border gap-2
           text-sm items-center border-bright-sun-400 xsm-mx:mt-3 flex px-2 py-1 xs-mx:px-1 xs-mx:py-0 rounded-lg '>
            {selectedItem} <ActionIcon color='bright-sun.4' variant='transparent'
          aria-label='Settings'  > <IconAdjustments className=' h-[70%] w-[70%]'/>
            </ActionIcon> </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}