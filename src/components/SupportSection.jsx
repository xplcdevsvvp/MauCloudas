import React from "react";

function SupportSection() {
  return (
    <section id="support" className="max-w-6xl mx-auto py-16 px-4 fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center text-accent">Hỗ trợ & Hướng dẫn</h2>
      <ul className="space-y-4 text-white text-lg max-w-3xl mx-auto">
        <li>Hướng dẫn cài đặt game server (Minecraft, Rust, ARK...)</li>
        <li>Hỗ trợ kỹ thuật 24/7 qua chat, email, hotline</li>
        <li>FAQ: Các câu hỏi thường gặp về dịch vụ hosting</li>
      </ul>
    </section>
  );
}

export default SupportSection;
