import { IconHeart } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const CarCard = () => {
  return (
    <div className='car-card'>
      <div className='car-card__img'>
        <Image src='/images/car.jpg' alt='car' fill />
      </div>
      <div className='car-card__body'>
        <p className='brand'>Toyota</p>
        <p className='name'>Volvo</p>
        <p className='price'>500 trieu</p>
        <div className='actions'>
          <Link href='/'>Xem xe</Link>
          <button className='save'>
            <IconHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
