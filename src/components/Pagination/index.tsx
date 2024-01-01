import './style.scss';

const Pagination = () => {
  return (
    <div className='pagination'>
      <ul>
        <li className='pagination__item pagination__item--prev'>
          <a href=''>
            <i className='fa-solid fa-angle-left'></i>
          </a>
        </li>
        <li className='pagination__item pagination__item--active'>
          <a href=''>1</a>
        </li>
        <li className='pagination__item'>
          <a href=''>2</a>
        </li>
        <li className='pagination__item'>
          <a href=''>3</a>
        </li>
        <li className='pagination__item'>
          <a href=''>...</a>
        </li>
        <li className='pagination__item'>
          <a href=''>10</a>
        </li>
        <li className='pagination__item pagination__item--next'>
          <a href=''>
            <i className='fa-solid fa-angle-right'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
