import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const News = ({ title }: { title: string }) => {
  return (
    <div className='news'>
      <Link href='/' className='news__img'>
        <Image src='/images/news.jpg' alt='news' width={200} height={200} />
      </Link>
      <div className='news__body'>
        <h3 className='news__title'>
          <Link href='/'>{title}</Link>
        </h3>
        <div className='news__category'>Thông tin xe</div>
        <div className='news__description'>
          Sau thời gian dài chờ đợi, chiếc Mercedes-AMG GT thế hệ thứ 2 cũng
          chính thức được ra mắt đến với công chúng. Xe được bổ sung nhiều thiết
          kế vào công nghệ mới, nổi bật nhất là không gian nội thất 2+2 và hệ
          dẫn động 4 bánh toàn thời gian. Điểm khác biệt so với thế hệ đầu tiên
          là AMG GT chỉ được sản xuất với kết cấu coupe. Với những khách hàng
          quan tâm với phiên bản AMG GT Roadster, chiếc Mercedes-AMG SL Roadster
          thế hệ mới sẽ là sự lựa chọn thay thế hợp lý. Không khó để nhận ra AMG
          GT thế hệ thứ{' '}
        </div>
        <div className='news__info'>
          <div className='news__author'>
            <Image
              src='/images/avatar.jpg'
              alt='author'
              width={100}
              height={100}
            />
            <span>LTD</span>
          </div>
          <span className='news__date'>12/12/2023</span>
        </div>
      </div>
    </div>
  );
};

export default News;
