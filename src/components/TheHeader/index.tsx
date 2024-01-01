import { IconAngleDown, IconHeart, IconSearch } from '@/assets/icons';
import { Input, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderMb from './HeaderMb';
import './style.scss';

const TheHeader = () => {
  return (
    <header>
      <div className='top-bar'>
        <div className='container top-bar__wrapper'>
          <div className='top-bar__item'>
            <a className='top-bar__link'>
              <i className='fa-solid fa-phone'></i>
              <span>0849.300.599</span>
            </a>
            <a className='top-bar__link'>
              <i className='fa-regular fa-envelope'></i>
              <span>duclt3005@gmail.com</span>
            </a>
          </div>
          <div className='top-bar__item'>
            <a className='top-bar__link'>
              <i className='fa-solid fa-right-to-bracket'></i>
              <span>Login</span>
            </a>
            <a className='top-bar__link'>
              <i className='fa-solid fa-lock-open'></i>
              <span>Register</span>
            </a>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container header__wrapper'>
          <div className='header__logo'>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt=''
                width={180}
                height={45}
                priority={true}
              />
            </Link>
          </div>
          <ul className='header__menu'>
            <li>
              <Link href=''>
                Xe mới <i className='fa-solid fa-angle-down'></i>
              </Link>
              <ul className='header__submenu'>
                <li>Lọc xe</li>
                <li>Sedan</li>
              </ul>
            </li>
            <li>
              <Link href=''>
                Tin tức <i className='fa-solid fa-angle-down'></i>
              </Link>
              <ul className='header__submenu'></ul>
            </li>
            <li>
              <Link href=''>
                Công cụ <i className='fa-solid fa-angle-down'></i>
              </Link>
              <ul className='header__submenu'></ul>
            </li>
          </ul>
          <div className='header__tools'>
            <div className='search'>
              <Input placeholder='Search car, post' focusBorderColor='#ccc' />
              <button>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </div>
            <div className='save'>
              <Tooltip
                hasArrow
                label='Search places'
                bg='rgba(17,17,17,.9)'
                color='#fff'
                p='8px'
                fontSize={12}
              >
                <i className='fa-regular fa-heart'></i>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <HeaderMb />
    </header>
  );
};

export default TheHeader;
