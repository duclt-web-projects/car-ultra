import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const CarCompareItem = () => {
  return (
    <div className='compare'>
      <div className='compare__wrapper'>
        <div className='compare__car compare__car-1'>
          <Image src='/images/car.jpg' alt='car' width={100} height={100} />
          <p className='name'>
            Toyota Vios 2023 Toyota Vios 2023 Toyota Vios 2023
          </p>
          <p className='price'>500 trieu</p>
        </div>
        <div className='compare__vs'>
          <span>vs</span>
          <div></div>
        </div>
        <div className='compare__car compare__car-2'>
          <Image src='/images/car.jpg' alt='car' width={100} height={100} />
          <p className='name'>Toyota</p>
          <p className='price'>500 trieu</p>
        </div>
      </div>
      <Link href='/' className='compare__btn'>
        Compare now
      </Link>
    </div>
  );
};

export default CarCompareItem;
