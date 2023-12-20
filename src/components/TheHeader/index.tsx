import {
  IconAngleDown,
  IconHeart,
  IconLogin,
  IconMail,
  IconPhone,
  IconResister,
  IconSearch,
} from '@/assets/icons';
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
              <IconPhone />
              <span>0849.300.599</span>
            </a>
            <a className='top-bar__link'>
              <IconMail />
              <span>duclt3005@gmail.com</span>
            </a>
          </div>
          <div className='top-bar__item'>
            <a className='top-bar__link'>
              <IconLogin />
              <span>Login</span>
            </a>
            <a className='top-bar__link'>
              <IconResister />
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
                Xe mới <IconAngleDown />
              </Link>
              <ul className='header__submenu'>
                <li>Lọc xe</li>
                <li>Sedan</li>
              </ul>
            </li>
            <li>
              <Link href=''>
                Tin tức <IconAngleDown />
              </Link>
              <ul className='header__submenu'></ul>
            </li>
            <li>
              <Link href=''>
                Công cụ <IconAngleDown />
              </Link>
              <ul className='header__submenu'></ul>
            </li>
          </ul>
          <div className='header__tools'>
            <div className='search'>
              <Input placeholder='Search car, post' focusBorderColor='#ccc' />
              <button>
                <IconSearch />
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
                <IconHeart />
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
