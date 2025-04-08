import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa'; // Importer ikon

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  async function sendMessage() {
    const userMessage = input;

    // Show the user message immediately
    setMessages([...messages, { from: "user", text: userMessage }]);

    // Indicate that bot is thinking
    setIsThinking(true);

    const res = await fetch("https://tindbot-production.up.railway.app/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });
    const data = await res.json();

    // Hide thinking and show the bot's response
    setIsThinking(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: "bot", text: data.choices[0].message.content }, // Show bot's response immediately
    ]);
    setInput("");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary p-6 md:p-10">
      {/* Full border around the entire chatbox */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 space-y-4 flex flex-col justify-between h-[400px] border-2 border-primary">

        {/* Header inside the widget with Dr. Dropin color */}
        <div className="w-full bg-primary text-white p-4 rounded-t-xl text-center">
          <h2 className="text-lg font-semibold">Dr. Dropin Chatbot</h2>
        </div>

        {/* Chat messages */}
        <div className="space-y-3 overflow-y-auto max-h-[250px]">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              className={`p-3 rounded-lg max-w-xs ${
                m.from === "user" ? "bg-primary text-white ml-auto" : "bg-gray-300 text-black mr-auto"
              } transition-all duration-300 ease-in-out`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <strong>{m.from === "user" ? "You" : ""}:</strong> {m.text}
            </motion.div>
          ))}
          {isThinking && (
            <div className="flex items-center justify-start space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-ping" />
            </div>
          )}
        </div>

        {/* Input field with paper plane icon and send button */}
        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ask something..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-3 bg-primary text-white rounded-lg hover:bg-blue-700 focus:outline-none active:scale-95 transition duration-300"
          >
            <FaPaperPlane className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
