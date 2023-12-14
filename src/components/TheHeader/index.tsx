import { IconAngleDown, IconHeart, IconSearch } from '@/assets/icons';
import { Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderMb from './HeaderMb';
import './style.scss';

const TheHeader = () => {
  return (
    <>
      <header>
        <div className='top-bar'>
          <div className='container top-bar__wrapper'>
            <Link href='/' className='top-bar__logo'>
              <Image
                src='/images/logo.svg'
                alt=''
                width={160}
                height={34}
                priority={true}
              />
            </Link>
            <div className='top-bar__search'>
              <input type='text' placeholder='Search car ...' />
              <button>
                <IconSearch />
              </button>
            </div>
            <div className='top-bar__right'>
              <div className='favorite'>
                <Tooltip
                  hasArrow
                  label='Yêu thích'
                  bg='#222'
                  color='#fff'
                  top='10px'
                  fontSize={12}
                  padding='4px 8px'
                  fontWeight={400}
                >
                  <IconHeart />
                </Tooltip>
              </div>
              <Link href='/' className='btn btn-login'>
                Đăng nhập
              </Link>
              <div className='line'></div>
              <Link href='/' className='btn btn-register'>
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
        <div className='header'>
          <div className='container'>
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
          </div>
        </div>
      </header>
      <HeaderMb />
    </>
  );
};

export default TheHeader;
