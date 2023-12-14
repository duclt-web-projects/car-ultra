import Banner from './components/Banner';
import Searchbox from './components/SearchBox';
import QuickTabs from './components/QuickTabs';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='container'>
        <Searchbox />
        <QuickTabs />
      </div>
    </main>
  );
}
