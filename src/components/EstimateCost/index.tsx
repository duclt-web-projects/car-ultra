'use client';

import Select from 'react-select';
import './style.scss';

const EstimateCost = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className='estimate-cost'>
      <h3 className='estimate-cost__title'>
        Giá xe Honda Civic lăn bánh tại các Tỉnh Thành
      </h3>
      <div className='estimate-cost__options'>
        <div className='option'>
          <label htmlFor=''>Mục đích sử dụng</label>
          <div className='option__item'>
            <button className='option__btn option__btn--active'>Cá nhân</button>
            <button className='option__btn option__btn'>Doanh nghiệp</button>
          </div>
        </div>
        <div className='option'>
          <label htmlFor=''>Nơi đăng ký</label>
          <div className='option__item'>
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
        </div>
        <div className='option'>
          <label htmlFor=''>Chọn phiên bản xe</label>
          <div className='option__item'>
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
        </div>
        <div className='option'>
          <label htmlFor=''>Giá đàm phán (VND)</label>
          <div className='option__item'>
            <input type='text' className='cu-input price' placeholder='Keyword' />
          </div>
        </div>
      </div>
      <ul className='estimate-cost__info'>
        <li>
          <span>Phí trước bạ (10%)</span>
          <span className='cost'>73,000,000</span>
        </li>
        <li>
          <span>Phí sử dụng đường bộ (01 năm)</span>
          <span className='cost'>1,560,000</span>
        </li>
        <li>
          <span>Bảo hiểm trách nhiệm dân sự (01 năm)</span>
          <span className='cost'>480,700</span>
        </li>
        <li>
          <span>Phí đăng ký biển số</span>
          <span className='cost'>20,000,000</span>
        </li>
        <li>
          <span>Phí đăng kiểm</span>
          <span className='cost'>370,000</span>
        </li>
        <li className='total'>
          <span>Tổng cộng (VND)</span>
          <span className='cost'>825,410,700</span>
        </li>
      </ul>
      <small>Công cụ tính toán chỉ mang tính chất tham khảo</small>
    </div>
  );
};

export default EstimateCost;
