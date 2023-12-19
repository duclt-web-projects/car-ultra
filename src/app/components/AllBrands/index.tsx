import IconArrowRight from '@/assets/icons/IconArrowRight';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const AllBrands = () => {
  return (
    <div className='all-brands'>
      <div className='all-brands__title'>
        <h2 className='heading-2'>All Brands</h2>
        <Link href='/'>
          View more <IconArrowRight />
        </Link>
      </div>
      <div className='all-brands__list'>
        {Array(10)
          .fill('1')
          .map((e, i) => (
            <Link href='/' className='brand' key={i}>
              <Image src='/images/kia.jpg' width={40} height={40} alt='oto' />
              <span>Suzuki</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllBrands;
