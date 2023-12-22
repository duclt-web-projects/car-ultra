import Breadcrumb from '@/components/Breadcrumb';
import CarCard from '@/components/CarCard';
import Pagination from '@/components/Pagination';
import Sidebar from '@/components/Sidebar';
import './style.scss';

const Listing = () => {
  return (
    <>
      <Breadcrumb />
      <div className='container cu-wrapper'>
        <div className='cu-wrapper__content'>
          <h1 className='heading'>Danh Sách Xe Ô tô Tại Việt Nam</h1>
          <CarCard type='list' />
          <CarCard />
          <Pagination />
        </div>
        <div className='cu-wrapper__sidebar'>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Listing;
