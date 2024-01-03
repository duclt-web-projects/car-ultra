import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import './style.scss';
import EstimateCost from '@/components/EstimateCost';

const CarDetail = () => {
  return (
    <>
      <section className='menu-content'>
        <div className='container'>
          <ul className='menu-content__list'>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-regular fa-compass'></i>
                <span>Đánh giá chi tiết</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-car-side'></i>
                <span>Giá lăn bánh</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-gears'></i>
                <span>Thông số kỹ thuật</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-code-compare'></i>
                <span>So sánh</span>
              </Link>
            </li>
            <li className='menu-content__item'>
              <Link href='/'>
                <i className='fa-solid fa-location-dot'></i>
                <span>Tìm showroom</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className='detail-content'>
        <div className='container'>
          <div className='detail'>
            <h2 className='detail__title'>
              Honda Civic 2024: Bảng Giá, Khuyến Mãi, Trả Góp (1/2024)
            </h2>
            <div className='detail__content'>
              <p>
                Honda Việt Nam chính thức ra mắt Honda Civic thế hệ mới. Mẫu
                sedan hạng C thế hệ mới được giới thiệu quốc tế vào tháng 4.2022
                và cập bến một số quốc gia Đông Nam Á vào tháng 8 như Singapore,
                Thái Lan. Giá xe ô tô Honda của dòng Civic tại Việt Nam dao động
                khoảng từ 730 triệu đến 2,399 tỷ đồng tùy các phiên bản khác
                nhau.
              </p>
              <p>
                Civic thế hệ mới được nhập khẩu nguyên chiếc từ Thái Lan với 3
                bản RS, G, E, cùng 5 tùy chọn màu trắng ngọc, xanh, xám, đỏ và
                đen, được bán chính thức từ ngày 23.2 tại hệ thống phân phối ôtô
                Honda trên toàn quốc.
              </p>
              <p>
                Civic thế hệ mới được nhập khẩu nguyên chiếc từ Thái Lan với 3
                bản RS, G, E, cùng 5 tùy chọn màu trắng ngọc, xanh, xám, đỏ và
                đen, được bán chính thức từ ngày 23.2 tại hệ thống phân phối ôtô
                Honda trên toàn quốc.
              </p>
              <p>
                Cả 3 bản RS, G, E của Honda Civic đều được trang bị Hệ thống
                công nghệ hỗ trợ lái xe an toàn Honda SENSING, bảo vệ toàn diện
                cho người lái, hành khách, người đi đường và các phương tiện
                xung quanh.
              </p>
            </div>
            <h2 className='detail__title'>Bảng giá Honda Civic tháng 1-2024</h2>

            <table className='detail__table'>
              <thead>
                <tr>
                  <th>Phiên bản</th>
                  <th>Giá bán</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='name'>Honda Civic E (Máy Xăng)</td>
                  <td className='price'>730 triệu</td>
                </tr>
                <tr>
                  <td className='name'>Honda Civic E (Máy Xăng)</td>
                  <td className='price'>730 triệu</td>
                </tr>
                <tr>
                  <td className='name'>Honda Civic E (Máy Xăng)</td>
                  <td className='price'>730 triệu</td>
                </tr>
                <tr>
                  <td className='name'>Honda Civic E (Máy Xăng)</td>
                  <td className='price'>730 triệu</td>
                </tr>
              </tbody>
            </table>

            <h2 className='detail__title'>Ngoại thất</h2>
            <div className='detail__content'>
              <p>
                Cả Honda Civic và Honda HR-V đều là những mẫu xe ăn khách của
                Honda tại Việt nam với những đặc điểm nổi bật riêng. Honda Civic
                có chiều dài trục cơ sở tăng thêm 35,5 mm và rộng hơn 12 mm.
                Khác với thế hệ cũ, Honda Civic mang kiểu dáng thuần sedan
                truyền thống hơn với thiết kế mui xe dài, cột A được dời về sau
                50 mm, cửa sổ hạ thấp 25 mm, điều này khiến chiếc sedan hạng C
                trông trung tính và thanh lịch hơn.
              </p>
            </div>
            <div className='detail__more'>
              <button
                className='cu-btn btn-viewmore'
                title='Xem thêm'
              >
                Xem thêm
              </button>
            </div>
            <EstimateCost />
          </div>
          <div className='sidebar-wrapper'>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetail;
