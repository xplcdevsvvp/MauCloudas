import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient text-white text-center py-6">
      <p>&copy; 2025 AsakaCloud.vn | All rights reserved</p>
      <ul className="flex justify-center space-x-4">
        <li><a href="/privacy-policy">Chính sách bảo mật</a></li>
        <li><a href="/terms-of-service">Điều khoản dịch vụ</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
