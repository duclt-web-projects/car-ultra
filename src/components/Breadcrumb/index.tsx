import { IconHome } from '@/assets/icons';
import Link from 'next/link';
import './style.scss';

const Breadcrumb = () => {
  return (
    <div className='breadcrumb'>
      <div className='container'>
        <ul>
          <li>
            <Link href='/' className='breadcrumb__home'>
              <i className='fa-solid fa-house'></i>
            </Link>
          </li>
          <li className='breadcrumb__delimiter'>
            <i className='fa-solid fa-angle-right'></i>
          </li>
          <li>
            <Link href='/'>Giá xe</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
