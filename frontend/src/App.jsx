import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I’m your Gemini AI assistant." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/gemini/generate", {
        prompt: input
      });

      const botMessage = { role: "bot", content: res.data.output };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Error connecting to server." }
      ]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center p-4 text-lg font-semibold shadow-md">
        Gemini AI Chatbot
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-lg prose ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : msg.role === "system"
                ? "bg-gray-300 text-gray-800 mx-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // className="prose prose-sm max-w-none"
            >
              {msg.content}
            </ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs animate-pulse">
            Gemini is typing...
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white shadow-md flex">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-400 resize-none"
          rows={1}
        ></textarea>
        <button
          onClick={sendMessage}
          disabled={loading}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
