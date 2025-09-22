import React from "react";

function Footer() {
  return (
    <footer className="bg-dark bg-opacity-95 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white">
        <div className="mb-4 md:mb-0">
          <div className="font-bold text-xl text-accent">AsakaCloud.vn</div>
          <div className="text-sm">© 2025 AsakaCloud. All rights reserved.</div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-accent">Chính sách bảo mật</a>
          <a href="#" className="hover:text-accent">Liên hệ</a>
          <a href="#" className="hover:text-accent">Facebook</a>
          <a href="#" className="hover:text-accent">Zalo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
