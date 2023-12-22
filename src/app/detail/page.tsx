import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import BoxContact from './components/BoxContact';
import './style.scss';
import CarImage from './components/CarImage';

const Detail = () => {
  return (
    <>
      <Breadcrumb />
      <div className='container cu-wrapper'>
        <div className='cu-wrapper__content'>
          <CarImage />
        </div>
        <div className='cu-wrapper__sidebar'>
          <BoxContact />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Detail;
