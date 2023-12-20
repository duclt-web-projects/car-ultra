import {
  IconCalendar,
  IconCar,
  IconEngine,
  IconFuel,
  IconHeart,
  IconSeat,
} from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const CarCardViewList = () => {
  return (
    <Link href='/' className='car-card car-card--view-list'>
      <div className='car-card__img'>
        <Image src='/images/car.jpg' alt='car' fill />
      </div>
      <div className='car-card__body'>
        <p className='name'>Volvo</p>
        <p className='price'>
          <span>500 trieu</span>
        </p>
        <div className='information'>
          <div className='info'>
            <p className='info__title'>
              <IconEngine /> Động cơ
            </p>
            <p className='info__content'>Động cơ điện</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <IconFuel /> Nhiên liệu
            </p>
            <p className='info__content'>Điện</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <IconCar /> Loại xe
            </p>
            <p className='info__content'>SUV</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <IconSeat /> Số chỗ
            </p>
            <p className='info__content'>5</p>
          </div>
          <div className='info'>
            <p className='info__title'>
              <IconCalendar /> Năm sản xuất
            </p>
            <p className='info__content'>2023</p>
          </div>
        </div>
        <div className='actions'>
          <button className='view'>Xem xe</button>
          <button className='save'>
            <IconHeart />
          </button>
        </div>
      </div>
    </Link>
  );
};

const CarCardViewGrid = () => {
  return (
    <div className='car-card car-card--view-grid'>
      <div className='car-card__img'>
        <Image src='/images/car.jpg' alt='car' fill />
      </div>
      <div className='car-card__body'>
        <p className='brand'>Toyota</p>
        <p className='name'>Volvo</p>
        <p className='price'>500 trieu</p>
        <div className='actions'>
          <button className='view'>Xem xe</button>
          <button className='save'>
            <IconHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

const CarCard = ({ type = 'grid' }: { type: string }) => {
  return type === 'grid' ? <CarCardViewGrid /> : <CarCardViewList />;
};

export default CarCard;
