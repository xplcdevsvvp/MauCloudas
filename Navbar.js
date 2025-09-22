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

      </ul>


    </nav>
  );
}

export default Navbar;
