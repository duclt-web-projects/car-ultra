'use client';

import Select from 'react-select';
import './style.scss';

const Filter = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className='filter'>
      <div className='form__select'>
        <Select
          instanceId='brand'
          options={options}
          classNamePrefix='cu-select'
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#eee',
              primary50: '#eee',
              primary: '#34a46a',
            },
          })}
        />
      </div>
    </div>
  );
};

export default Filter;
