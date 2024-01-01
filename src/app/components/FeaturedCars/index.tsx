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
          <div className='tabs__wrapper'>
            <Tab>Trending</Tab>
            <Tab>Popular</Tab>
            <Tab>Upcoming</Tab>
            <TabIndicator
              mt='-1.5px'
              height='3px'
              bg='#e52d27'
              borderRadius='1px'
            />
          </div>
          <div className='slide-btn__wrapper'>
            <button className='slide-btn slide-btn-prev' onClick={handlePrev}>
              <i className='fa-solid fa-angle-left'></i>
            </button>
            <button className='slide-btn slide-btn-next' onClick={handleNext}>
              <i className='fa-solid fa-angle-right'></i>
            </button>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel>
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
