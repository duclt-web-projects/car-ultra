import Breadcrumb from '@/components/Breadcrumb';
import CarDetail from './components/CarDetail';
import CarImage from './components/CarImage';
import CarInfo from './components/CarInfo';
import './style.scss';

const Detail = () => {
  return (
    <>
      <Breadcrumb />
      <section className='main-content'>
        <div className='container'>
          <CarImage />
          <CarInfo />
        </div>
      </section>
      <CarDetail />
    </>
  );
};

export default Detail;
