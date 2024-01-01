import { IconEngine, IconSeat } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const CarCard = ({ type = 'grid' }: { type?: string }) => {
  return (
    <Link href='/detail' className={`car-card car-card--view-${type}`}>
      <div className='car-card__img'>
        <Image src='/images/car.jpg' alt='car' fill />
        <button className='save'>
          <i className='fa-regular fa-heart'></i>
        </button>
      </div>
      <div className='car-card__body'>
        <p className='brand'>Toyota</p>
        <p className='name'>Toyota Raize</p>
        <p className='price'>
          <span>500 trieu</span>
        </p>
        <div className='car-card__info'>
          <div className='info'>
            <p className='info__title'>
              <IconEngine /> <span>Động cơ</span>
            </p>
            <p className='info__content'>Động cơ điện</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <i className='fa-solid fa-gas-pump'></i> <span>Nhiên liệu</span>
            </p>
            <p className='info__content'>Điện</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <i className='fa-solid fa-car-side'></i> <span>Loại xe</span>
            </p>
            <p className='info__content'>SUV</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <IconSeat /> <span>Số chỗ</span>
            </p>
            <p className='info__content'>5</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <i className='fa-regular fa-calendar-days'></i>{' '}
              <span>Năm sản xuất</span>
            </p>
            <p className='info__content'>2023</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
