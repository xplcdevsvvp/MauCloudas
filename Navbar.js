import React, { useState } from 'react';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-gradient sticky top-0 z-10 p-4">
      <ul className="flex justify-center space-x-6 text-white">
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/services">Dịch vụ Hosting</a></li>
        <li><a href="/about">Giới thiệu</a></li>
        <li><a href="/contact">Liên hệ</a></li>
        <li><button onClick={toggleModal} className="hover:scale-105">Đăng Nhập</button></li>
      </ul>

      {isModalOpen && (
        <div className="modal bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center">
          <div className="modal-content bg-white p-4 rounded-lg">
            <span onClick={toggleModal} className="close cursor-pointer text-xl">&times;</span>
            <h2>Đăng Nhập</h2>
            <form>
              <input type="text" placeholder="Tên người dùng" className="border p-2 m-2 w-full" />
              <input type="password" placeholder="Mật khẩu" className="border p-2 m-2 w-full" />
              <button type="submit" className="bg-blue-500 text-white p-2 m-2">Đăng Nhập</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
