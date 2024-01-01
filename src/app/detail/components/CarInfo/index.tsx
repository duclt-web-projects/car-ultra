import { IconFuel } from '@/assets/icons';
import RatingStar from '@/components/RatingStar';
import Link from 'next/link';
import './style.scss';

const CarInfo = () => {
  return (
    <div className='car-info'>
      <h1>Toyota Vios</h1>
      <div className='car-info__rating'>
        <span className='rating-point'>4.9</span>
        <RatingStar />
        <span> | </span>
        <span className='rating-evaluate'>65 đánh giá</span>
      </div>
      <div className='car-info__price'>730 triệu - 2.399 triệu</div>
      <div className='car-info__estimate'>
        <Link href='/'>
          <span className='estimate__title'>Trả hàng tháng chỉ từ (*)</span>
          <span className='estimate__value'>12 triệu</span>
          <span className='estimate__icon'>
            <i className='fa-solid fa-angle-right'></i>
          </span>
        </Link>
        <Link href='/'>
          <span className='estimate__title'>Giá lăn bánh chỉ từ (*)</span>
          <span className='estimate__value'>806 triệu</span>
          <span className='estimate__icon'>
            <i className='fa-solid fa-angle-right'></i>
          </span>
        </Link>
      </div>
      <Link href='' className='car-info__report'>
        Nhận báo giá + ưu đãi ngay
      </Link>
      <div className='car-info__specs'>
        <div className='specs'>
          <div className='specs__icon'>
            <i className='fa-solid fa-gas-pump'></i>
          </div>
          <div className='specs__content'>
            <span className='specs__value'>Xăng</span>
            <span className='specs__label'>Loại nhiên liệu</span>
          </div>
        </div>
        <div className='specs'>
          <div className='specs__icon'>
            <i className='fa-solid fa-gas-pump'></i>
          </div>
          <div className='specs__content'>
            <span className='specs__value'>Xăng</span>
            <span className='specs__label'>Loại nhiên liệu</span>
          </div>
        </div>
        <div className='specs'>
          <div className='specs__icon'>
            <i className='fa-solid fa-gas-pump'></i>
          </div>
          <div className='specs__content'>
            <span className='specs__value'>Xăng</span>
            <span className='specs__label'>Loại nhiên liệu</span>
          </div>
        </div>
        <div className='specs'>
          <div className='specs__icon'>
            <i className='fa-solid fa-gas-pump'></i>
          </div>
          <div className='specs__content'>
            <span className='specs__value'>Xăng</span>
            <span className='specs__label'>Loại nhiên liệu</span>
          </div>
        </div>
        <div className='specs'>
          <div className='specs__icon'>
            <i className='fa-solid fa-gas-pump'></i>
          </div>
          <div className='specs__content'>
            <span className='specs__value'>Xăng</span>
            <span className='specs__label'>Loại nhiên liệu</span>
          </div>
        </div>
        <div className='specs'>
          <div className='specs__icon'>
            <i className='fa-solid fa-gas-pump'></i>
          </div>
          <div className='specs__content'>
            <span className='specs__value'>Xăng</span>
            <span className='specs__label'>Loại nhiên liệu</span>
          </div>
        </div>
      </div>
      <Link href='' className='car-info__view-detail'>
        Xem chi tiết thông số
      </Link>
    </div>
  );
};

export default CarInfo;
