import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const BoxContact = () => {
  return (
    <div className='box-contact'>
      <Link href='/' className='box-contact__logo'>
        <Image src='/images/car.jpg' alt='logo' width={100} height={100} />
      </Link>
      <h3>Kia</h3>
      <button className='box-contact__register'>Báo giá</button>
      <button className='box-contact__drive'>Đăng ký lái thử</button>
    </div>
  );
};

export default BoxContact;
