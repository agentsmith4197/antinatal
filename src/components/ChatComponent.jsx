import React, { useState } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{message.sender}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
