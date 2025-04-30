import { useEffect, useState } from 'react';
import { Checkbox, CheckIcon, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { IconSearch, IconSelector } from '@tabler/icons-react';

export function MultiSelect(props:any) {
  useEffect(()=>{
    setData(props.options)
  
  },[])
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  
  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value
    .slice(
      0,1
    )
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  const options = data .filter((item) =>
   item.toLowerCase().includes(search.trim().toLowerCase())).map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}  __size='xs'
    color='bright-sun' >
      <Group gap="sm" >
      <Checkbox
  checked={value.includes(item)}
  onChange={() => {}}
  aria-hidden
  tabIndex={-1}
  style={{ pointerEvents: 'none' }}
  styles={(theme) => ({
    input: {
      backgroundColor: value.includes(item)
        ? theme.colors['bright-sun'][4]
        : 'transparent',
      borderColor: theme.colors['bright-sun'][4],
    },
  })}
/>
        <span className='text-mine-shaft-300'>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput
        variant='unstyled'
        rightSection={<IconSelector  />}
        onClick={() => combobox.toggleDropdown()}
        
        leftSection={<div className='text-bright-sun-400 bg-mine-shaft-900 p-1 rounded-full mr-2'><props.icon/></div>} >
           <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 0 && (
                  <Pill>+{value.length -  1} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className='!text-mine-shaft-200'>{props.title}</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                onKeyDown={(event) => {
                  if (event.key === 'Backspace') {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
      <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search"
          />
        <Combobox.Options className='max-h-52 overflow-y-auto'>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}