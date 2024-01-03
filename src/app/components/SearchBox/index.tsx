'use client';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
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
      <div className='container'>
        <Tabs variant='enclosed' colorScheme='#fff'>
          <TabList>
            <Tab>Search car</Tab>
            <Tab>Search showroom</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className='search-bosx'>
                <div className='form'>
                  <div className='form__input'>
                    <input
                      type='text'
                      className='cu-input'
                      placeholder='Keyword'
                    />
                  </div>
                  <div className='form__select'>
                    <Select
                      instanceId='brand'
                      options={options}
                      classNamePrefix='cu-select'
                      placeholder='Select brand'
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary25: '#f2f2f2',
                          primary50: '#e0e0e0',
                          primary: '#e52d27',
                        },
                      })}
                    />
                  </div>
                  <div className='form__select'>
                    <Select
                      instanceId='model'
                      options={options}
                      classNamePrefix='cu-select'
                      placeholder='Select model'
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary25: '#f2f2f2',
                          primary50: '#e0e0e0',
                          primary: '#e52d27',
                        },
                      })}
                    />
                  </div>
                  <div className='form__select'>
                    <Select
                      instanceId='price'
                      options={options}
                      classNamePrefix='cu-select'
                      placeholder='Price'
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary25: '#f2f2f2',
                          primary50: '#e0e0e0',
                          primary: '#e52d27',
                        },
                      })}
                    />
                  </div>
                  <div className='form__btn'>
                    <button className='cu-btn-search'>
                      <i className='fa-solid fa-magnifying-glass'></i> Tìm xe
                    </button>
                    <button className='clear'>
                      <i className='fa-solid fa-arrows-rotate'></i>
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
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Searchbox;
