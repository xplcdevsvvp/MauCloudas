import React from "react";

function Navbar({ openModal }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-dark bg-opacity-90 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-accent">AsakaCloud.vn</div>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#hosting" className="hover:text-accent transition">Dịch vụ Hosting</a></li>
          <li><a href="#about" className="hover:text-accent transition">Giới thiệu</a></li>
          <li><a href="#support" className="hover:text-accent transition">Hỗ trợ</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Liên hệ</a></li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-accent px-4 py-2 rounded hover-scale" onClick={() => openModal("login")}>Đăng Nhập</button>
          <button className="bg-primary px-4 py-2 rounded hover-scale" onClick={() => openModal("register")}>Đăng Ký</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
