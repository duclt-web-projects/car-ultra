'use client';

import { IconBars, IconHeart } from '@/assets/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderMb = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='header-mb'>
      <div className='container'>
        <div className='top-bar'>
          <div className='top-bar__logo'>
            <Link href='/'>
              <Image
                src='/images/logo.svg'
                alt=''
                width={160}
                height={34}
                priority={true}
              />
            </Link>
          </div>
          <div className='top-bar__right'>
            <div className='favorite'>
              <IconHeart />
            </div>
            <button className='open-menu' onClick={onOpen}>
              <IconBars />
            </button>
          </div>
        </div>
      </div>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <div className='header-mb__auth'>
              <Link href='/' className='btn btn-login'>
                Đăng nhập
              </Link>
              <Link href='/' className='btn btn-register'>
                Đăng ký
              </Link>
            </div>
            <div className='header-mb__menu'>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    Xe mới
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <div className='submenu-mb__item'>Lọc xe</div>
                    <div className='submenu-mb__item'>Sedan</div>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    Tin tức
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <div className='submenu-mb__item'>Lọc xe</div>
                    <div className='submenu-mb__item'>Sedan</div>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    Công cụ
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <div className='submenu-mb__item'>Lọc xe</div>
                    <div className='submenu-mb__item'>Sedan</div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HeaderMb;
