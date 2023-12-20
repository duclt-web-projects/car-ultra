import Breadcrumb from '@/components/Breadcrumb';
import CarCard from '@/components/CarCard';
import './style.scss';

const Listing = () => {
  return (
    <>
      <Breadcrumb />
      <div className='container listing'>
        <h1 className='heading'>Danh Sách Xe Ô tô Tại Việt Nam</h1>
        <CarCard type='list' />
      </div>
    </>
  );
};

export default Listing;
