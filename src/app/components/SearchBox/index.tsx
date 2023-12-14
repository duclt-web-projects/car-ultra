'use client';

import { IconSearch } from '@/assets/icons';
import Link from 'next/link';
import Select from 'react-select';
import './style.scss';

const Searchbox = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className='search-box'>
      <div className='form'>
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
        <div className='form__select'>
          <Select
            instanceId='model'
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
        <div className='form__select'>
          <Select
            instanceId='price'
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
        <div className='form__btn'>
          <button>
            <IconSearch /> Tìm xe
          </button>
        </div>
      </div>
      <div className='tags'>
        <p>Được tìm nhiều:</p>
        <Link href='/' className='tag'>
          Giá xe tháng 12
        </Link>
        <Link href='/' className='tag'>
          VinFast VF8
        </Link>
        <Link href='/' className='tag'>
          Toyota Vios
        </Link>
        <Link href='/' className='tag'>
          KIA Sportage
        </Link>
        <Link href='/' className='tag'>
          Hyundai SantaFe
        </Link>
      </div>
    </div>
  );
};

export default Searchbox;
