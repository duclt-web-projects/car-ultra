import Breadcrumb from '@/components/Breadcrumb';
import CarCard from '@/components/CarCard';
import './style.scss';
import Sidebar from '@/components/Sidebar';

const Listing = () => {
  return (
    <>
      <Breadcrumb />
      <div className='container'>
        <div className='listing-wrapper'>
          <div className='listing-wrapper__content'>
            <h1 className='heading'>Danh Sách Xe Ô tô Tại Việt Nam</h1>
            <CarCard type='list' />
            <CarCard  />
          </div>
          <div className='listing-wrapper__sidebar'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
