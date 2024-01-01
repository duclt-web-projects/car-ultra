import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const TheFooter = () => {
  return (
    <footer>
      <div className='container footer'>
        <div className='footer__overview'>
          <Image src='/images/logo.png' alt='logo' width={100} height={100} />
          <p>
            Autofun.vn là trang web ô tô tổng hợp cung cấp tin tức, đánh giá về
            ô tô với các công cụ giúp bạn so sánh các mẫu xe khác nhau. Tất cả
            những gì bạn cần để tìm chiếc ô tô tiếp theo phù hợp với mình sẽ có
            ở đây.
          </p>
        </div>
        <div className='footer__links'>
          <p className='title'>Xe phổ biến</p>
          <ul>
            <li>
              <Link href='/'>Vinfast Fadil</Link>
            </li>
            <li>
              <Link href='/'>Hyundai Accent</Link>
            </li>
            <li>
              <Link href='/'>Toyota Vios</Link>
            </li>
            <li>
              <Link href='/'>Ford Ranger</Link>
            </li>
            <li>
              <Link href='/'>Toyota Corolla Cross</Link>
            </li>
            <li>
              <Link href='/'>KIA Seltos</Link>
            </li>
          </ul>
        </div>
        <div className='footer__links'>
          <p className='title'>Xe phổ biến</p>
          <ul>
            <li>
              <Link href='/'>Vinfast Fadil</Link>
            </li>
            <li>
              <Link href='/'>Hyundai Accent</Link>
            </li>
            <li>
              <Link href='/'>Toyota Vios</Link>
            </li>
            <li>
              <Link href='/'>Ford Ranger</Link>
            </li>
            <li>
              <Link href='/'>Toyota Corolla Cross</Link>
            </li>
            <li>
              <Link href='/'>KIA Seltos</Link>
            </li>
          </ul>
        </div>
        <div className='footer__links'>
          <p className='title'>Xe phổ biến</p>
          <ul>
            <li>
              <Link href='/'>Vinfast Fadil</Link>
            </li>
            <li>
              <Link href='/'>Hyundai Accent</Link>
            </li>
            <li>
              <Link href='/'>Toyota Vios</Link>
            </li>
            <li>
              <Link href='/'>Ford Ranger</Link>
            </li>
            <li>
              <Link href='/'>Toyota Corolla Cross</Link>
            </li>
            <li>
              <Link href='/'>KIA Seltos</Link>
            </li>
          </ul>
        </div>
        <div className='footer__links'>
          <p className='title'>Xe phổ biến</p>
          <ul>
            <li>
              <Link href='/'>Vinfast Fadil</Link>
            </li>
            <li>
              <Link href='/'>Hyundai Accent</Link>
            </li>
            <li>
              <Link href='/'>Toyota Vios</Link>
            </li>
            <li>
              <Link href='/'>Ford Ranger</Link>
            </li>
            <li>
              <Link href='/'>Toyota Corolla Cross</Link>
            </li>
            <li>
              <Link href='/'>KIA Seltos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <p>Copyright 2023 CarUltra | Design By CarUltra</p>
          <div className='social'>
            <span>Follow us:</span>
            <div className='social__list'>
              <Link href='/' className='social__item'>
                <i className='fa-brands fa-facebook-f'></i>
              </Link>
              <Link href='/' className='social__item'>
                <i className='fa-brands fa-youtube'></i>
              </Link>
              <Link href='/' className='social__item'>
                <i className='fa-brands fa-twitter'></i>
              </Link>
              <Link href='/' className='social__item'>
                <i className='fa-brands fa-instagram'></i>
              </Link>
              <Link href='/' className='social__item'>
                <i className='fa-brands fa-linkedin-in'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
