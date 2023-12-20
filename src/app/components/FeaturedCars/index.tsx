'use client';

import CarCard from '@/components/CarCard';
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';

// Import Swiper styles
import { IconAngleLeft, IconAngleRight } from '@/assets/icons';
import { useSwiperControl } from '@/hooks';
import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedCars = () => {
  const { swiperRef, handlePrev, handleNext } = useSwiperControl();

  return (
    <div className='featured'>
      <h2 className='heading'>Featured Cars</h2>
      <Tabs position='relative' variant='unstyled'>
        <TabList>
          <Tab>Trending</Tab>
          <Tab>Popular</Tab>
          <Tab>Upcoming</Tab>
        </TabList>
        <TabIndicator
          mt='-1.5px'
          height='2px'
          bg='blue.500'
          borderRadius='1px'
        />
        <TabPanels>
          <TabPanel>
            <button className='slide-btn slide-btn-prev' onClick={handlePrev}>
              <IconAngleLeft />
            </button>
            <button className='slide-btn slide-btn-next' onClick={handleNext}>
              <IconAngleRight />
            </button>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              ref={swiperRef}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Swiper spaceBetween={20} slidesPerView={4}>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Swiper spaceBetween={20} slidesPerView={4}>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default FeaturedCars;
