import React from "react";

function Modal({ type, closeModal }) {
  if (!type) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 fade-in">
      <div className="bg-dark rounded-lg p-8 w-full max-w-md shadow-xl relative">
        <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>&times;</button>
        {type === "login" ? (
          <>
            <h3 className="text-2xl font-bold mb-4 text-accent">Đăng Nhập</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Email hoặc Tên đăng nhập" className="w-full px-4 py-2 rounded bg-dark bg-opacity-60 border border-accent text-white" />
              <input type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 rounded bg-dark bg-opacity-60 border border-accent text-white" />
              <button type="submit" className="w-full bg-accent py-2 rounded hover-scale">Đăng Nhập</button>
            </form>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-4 text-primary">Đăng Ký</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Tên đăng nhập" className="w-full px-4 py-2 rounded bg-dark bg-opacity-60 border border-primary text-white" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-dark bg-opacity-60 border border-primary text-white" />
              <input type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 rounded bg-dark bg-opacity-60 border border-primary text-white" />
              <button type="submit" className="w-full bg-primary py-2 rounded hover-scale">Đăng Ký</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
