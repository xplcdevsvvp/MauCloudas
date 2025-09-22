import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HostingSection from "./components/HostingSection";
import AboutSection from "./components/AboutSection";
import SupportSection from "./components/SupportSection";
import ContactSection from "./components/ContactSection";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function App() {
  const [modal, setModal] = useState(null);

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  return (
    <div className="fade-in">
      <Navbar openModal={openModal} />
      <main className="pt-20">
        <HostingSection />
        <AboutSection />
        <SupportSection />
        <ContactSection />
      </main>
      <Footer />
      <Modal type={modal} closeModal={closeModal} />
      <ChatBot />
    </div>
  );
}

export default App;
