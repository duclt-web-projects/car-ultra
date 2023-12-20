import { IconAngleRight, IconHome } from '@/assets/icons';
import Link from 'next/link';
import './style.scss';

const Breadcrumb = () => {
  return (
    <div className='breadcrumb'>
      <div className='container'>
        <ul>
          <li>
            <Link href='/' className='breadcrumb__home'>
              <IconHome />
            </Link>
          </li>
          <li className='breadcrumb__delimiter'>
            <IconAngleRight />
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
