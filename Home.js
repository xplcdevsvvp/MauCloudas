import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient text-white py-20">
          <h1 className="text-center text-5xl">Chào mừng đến với AsakaCloud.vn</h1>
          <section className="about fade-in">
            <h2>Giới thiệu AsakaCloud.vn</h2>
            <p>AsakaCloud.vn cung cấp dịch vụ cloud hosting cho game server với công nghệ hiện đại, bảo mật và tốc độ cao. Chúng tôi hỗ trợ các game như Minecraft, Rust, ARK, CS2 và nhiều hơn nữa.</p>
            <ul>
              <li>Hạ tầng mạnh mẽ, uptime 99.99%</li>
              <li>Hỗ trợ kỹ thuật 24/7</li>
              <li>Bảng giá minh bạch, nhiều lựa chọn</li>
            </ul>
          </section>
        <p className="text-center mt-4">Dịch vụ Cloud Hosting cho các game server hàng đầu!</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
