import Link from 'next/link';
import './style.scss';

const SidebarItem = () => {
  return <Link href=''>Link 1</Link>;
};

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h4 className='sidebar__title'>Sidebar Title</h4>
      <div className='sidebar__list'>
        {Array(10)
          .fill('1')
          .map((e, i) => (
            <SidebarItem key={i} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
