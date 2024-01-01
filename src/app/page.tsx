import CarCompare from '@/components/CarCompare';
import AllBrands from './components/AllBrands';
import Banner from './components/Banner';
import FeaturedCars from './components/FeaturedCars';
import NewsList from './components/NewsList';
import QuickFilter from './components/QuickFilter';
import Searchbox from './components/SearchBox';

export default function Home() {
  return (
    <main>
      <Banner />
      <Searchbox />
      <div className='container'>
        <AllBrands />
        <FeaturedCars />
        <QuickFilter />
        <CarCompare />
        <NewsList />
      </div>
    </main>
  );
}
