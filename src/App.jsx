import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HostingSection from "./components/HostingSection";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  const [modal, setModal] = useState(null);

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  return (
    <div className="fade-in">
      <Navbar openModal={openModal} />
      <main className="pt-20">
        <HostingSection />
      </main>
      <Footer />
      <Modal type={modal} closeModal={closeModal} />
    </div>
  );
}

export default App;
