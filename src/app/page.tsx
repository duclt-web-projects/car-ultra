'use client';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Select from 'react-select';

export default function Home() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <main>
      <div className='container'>
        <h1>Hello</h1>
        <button>Hello</button>
        <br />
        <a href=''>Hello</a>
        <div className='test'>
          <input type='text' placeholder='Hello' className='cu-input' />
          <Select
            instanceId='lang'
            options={options}
            classNamePrefix='cu-select'
          />
        </div>
        <br />
        <Select
          defaultValue={[options[1], options[2]]}
          isMulti
          name='colors'
          options={options}
          className='basic-multi-select'
          classNamePrefix='cu-select'
          instanceId='lang'
        />
        <Menu>
          <MenuButton as={Button}>Actions</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </main>
  );
}
