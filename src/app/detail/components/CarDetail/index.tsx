import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import './style.scss';

const CarDetail = () => {
  return (
    <>
      <section className='menu-content'>
        <div className='container'>
          <ul className='menu-content__list'>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-regular fa-compass'></i>
                <span>Đánh giá chi tiết</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-car-side'></i>
                <span>Giá lăn bánh</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-gears'></i>
                <span>Thông số kỹ thuật</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-code-compare'></i>
                <span>So sánh</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-location-dot'></i>
                <span>Tìm showroom</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className='cu-wrapper__sidebar'>
        <Sidebar />
      </section>
    </>
  );
};

export default CarDetail;
