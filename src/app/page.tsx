import Banner from './components/Banner';
import Searchbox from './components/SearchBox';
import QuickTabs from './components/QuickTabs';
import AllBrands from './components/AllBrands';
import FeaturedCars from './components/FeaturedCars';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='container'>
        <Searchbox />
        <QuickTabs />
        <AllBrands />
        <FeaturedCars />
      </div>
    </main>
  );
}
