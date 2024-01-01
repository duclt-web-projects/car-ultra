import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const QuickTabs = () => {
  return (
    <>
      <h2>Search car</h2>
      <Tabs position='relative' variant='unstyled' className='quick-tabs'>
        <TabList>
          <Tab>Brand</Tab>
          <Tab>Body type</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabIndicator
          mt='-1.5px'
          height='2px'
          bg='#e52d27'
          borderRadius='1px'
        />
        <TabPanels>
          <TabPanel>
            <div className='brand'>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/toyota.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Toyota</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/huyndai.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Huyndai</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/vinfast.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Vinfast</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/kia.jpg'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Kia</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/ford.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Ford</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/mazda.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Mazda</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/honda.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Honda</span>
              </Link>
              <Link href='/' className='brand__item'>
                <Image
                  src='/images/brands/mitsubishi.webp'
                  alt=''
                  width={180}
                  height={45}
                  priority={true}
                />
                <span>Mitsubishi</span>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default QuickTabs;
