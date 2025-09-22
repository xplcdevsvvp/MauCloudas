import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-16 px-4 fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Liên hệ</h2>
      <div className="text-lg text-white text-center max-w-3xl mx-auto">
        <p>Email: support@asakacloud.vn</p>
        <p>Hotline: 0123 456 789</p>
        <p>Facebook: <a href="#" className="text-accent underline">facebook.com/asakacloud</a></p>
      </div>
    </section>
  );
}

export default ContactSection;
