'use client';

import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';
import './style.scss';

const Installment = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  return (
    <div className='installment'>
      <h3 className='installment__title'>Mua xe Honda Civic trả góp</h3>
      <div className='row'>
        <div className='col-6'>
          <p className='version'>Chọn phiên bản xe</p>
          <div className='installment__select'>
            <div className='installment__selected'>
              <p className='car-name'>Honda Civic E (Máy Xăng)</p>
              <p className='car-price'> 730 triệu</p>
              <i className='fa-solid fa-angle-down'></i>
            </div>
            <div className='installment__dropdown'></div>
          </div>
          <div className='installment__total'>
            <span className='title'>Mỗi tháng chỉ từ</span>
            <span className='value'>
              12,136,250 <span>VND</span>
            </span>
            <div className='total-detail'>
              <div className='left'>
                <span className='title'>Tiền vay (VND)</span>
                <span className='value'>511,000,000</span>
              </div>
              <div className='right'>
                <span className='title'>Tiền lãi (VND)</span>
                <span className='value'>110,397,290</span>
              </div>
            </div>
          </div>
          <div className='installment__calendar'>
            <button>Xem lịch trả khoản vay</button>
          </div>
          <small>*Công tụ tính toán chỉ mang tính chất tham khảo</small>
        </div>
        <div className='col-6'>
          <div className='installment__range prepay'>
            <div className='range-header'>
              <span>Trả trước (%)</span>
              <input type='text' placeholder='20' />
            </div>
            <Slider
              aria-label='slider-ex-6'
              onChange={(val) => setSliderValue(val)}
            >
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign='center'
                bg='blue.500'
                color='white'
                mt='-10'
                ml='-5'
                w='12'
              >
                {sliderValue}%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
          <div className='installment__range prepay'>
            <div className='range-header'>
              <span>Lãi suất (%/năm)</span>
              <input type='text' placeholder='20' />
            </div>
            <Slider
              aria-label='slider-ex-6'
              onChange={(val) => setSliderValue(val)}
            >
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign='center'
                bg='blue.500'
                color='white'
                mt='-10'
                ml='-5'
                w='12'
              >
                {sliderValue}%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>

          <div className='installment__term'>
            <p>Kỳ hạn vay (năm)</p>
            <div className='years'>
              <span>1 năm</span>
              <span>2 năm</span>
              <span>3 năm</span>
              <span>4 năm</span>
              <span className='active'>5 năm</span>
              <span>6 năm</span>
              <span>7 năm</span>
              <span>8 năm</span>
              <span>9 năm</span>
              <span>10 năm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installment;
