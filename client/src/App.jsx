import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    const res = await fetch("https://tindbot-production.up.railway.app/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: data.choices[0].message.content }]);
    setInput("");
  }

  return (
    <div>
      <h1>TindBot</h1>
      {messages.map((m, i) => (
        <p key={i}><strong>{m.from}:</strong> {m.text}</p>
      ))}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
