'use client';

import { IconBars, IconHeart, IconSearch } from '@/assets/icons';
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
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderMb = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
  } = useDisclosure();

  return (
    <div className='header-mb'>
      <div className='container header-mb__wrapper'>
        <div className='header-mb__logo'>
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
        <div className='header-mb__right'>
          <button className='search' onClick={onOpenSearch}>
            <IconSearch />
          </button>
          <div className='favorite'>
            <IconHeart />
          </div>
          <button className='open-menu' onClick={onOpen}>
            <IconBars />
          </button>
        </div>
      </div>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
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
      <Drawer
        placement='top'
        isOpen={isOpenSearch}
        onClose={onCloseSearch}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <div className='container'>
              <div className='header-mb__search'>
                <Input placeholder='Search car, post' focusBorderColor='#ccc' />
                <button className='cu-btn-search'>
                  <IconSearch />
                  Tìm kiếm
                </button>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HeaderMb;
