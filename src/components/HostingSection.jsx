import React from "react";

const services = [
  {
    name: "VPS Game",
    desc: "Dịch vụ máy chủ ảo cho game, hiệu năng cao, bảo mật tốt.",
    icon: "🎮",
  },
  {
    name: "Cloud Server",
    desc: "Máy chủ đám mây cho ứng dụng, mở rộng linh hoạt.",
    icon: "☁️",
  },
  {
    name: "Web Hosting",
    desc: "Lưu trữ website, tốc độ cao, ổn định.",
    icon: "🌐",
  },
  {
    name: "Game Hosting",
    desc: "Minecraft, Rust, CS2, ARK và nhiều game khác.",
    icon: "🕹️",
  },
];

function HostingSection() {
  return (
    <section id="hosting" className="max-w-6xl mx-auto py-16 px-4 fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center text-accent">Dịch vụ Hosting</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-dark bg-opacity-80 rounded-lg p-6 text-center hover-scale shadow-lg transition-all">
            <div className="text-5xl mb-4">{s.icon}</div>
            <div className="text-xl font-semibold mb-2 text-primary">{s.name}</div>
            <div className="text-base text-white mb-2">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HostingSection;
