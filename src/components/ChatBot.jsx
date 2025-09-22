import React, { useState } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Cảm ơn bạn đã gửi câu hỏi! Đội ngũ hỗ trợ sẽ phản hồi sớm nhất." },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-dark bg-opacity-95 rounded-lg shadow-xl fade-in">
      <div className="p-4 border-b border-accent text-accent font-bold">Chat Hỗ Trợ</div>
      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm ${msg.from === "bot" ? "text-accent" : "text-white text-right"}`}>{msg.text}</div>
        ))}
      </div>
      <form className="flex p-2 border-t border-accent" onSubmit={sendMessage}>
        <input
          className="flex-1 px-2 py-1 rounded bg-dark bg-opacity-60 text-white border border-accent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tin nhắn..."
        />
        <button type="submit" className="ml-2 bg-accent px-3 py-1 rounded hover-scale">Gửi</button>
      </form>
    </div>
  );
}

export default ChatBot;
