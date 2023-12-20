import Banner from './components/Banner';
import QuickTabs from './components/QuickTabs';
import Searchbox from './components/SearchBox';
import QuickFilter from './components/QuickFilter';
import AllBrands from './components/AllBrands';
import FeaturedCars from './components/FeaturedCars';
import CarCompare from '@/components/CarCompare';
import NewsList from './components/NewsList';

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
