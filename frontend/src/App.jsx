import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Home from "./pages/Home";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I'm your Gemini AI assistant. How can I help you today?" }
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
      // Replace with your actual API call
      const res = await fetch("http://localhost:5000/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();

      const botMessage = { role: "bot", content: data.output };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Sorry, I'm having trouble connecting. Please try again later." }
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
    <div className="relative">
      <Home />

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-2">
          <button
            onClick={() => setIsChatOpen(false)}
            className="absolute -top-2 -right-2 bg-slate-600 hover:bg-slate-700 text-white p-2 rounded-full transition-colors z-10 shadow-lg"
          >
            <X className="h-4 w-4" />
          </button>

          <Chatbot
            messages={messages}
            input={input}
            loading={loading}
            setInput={setInput}
            sendMessage={sendMessage}
            handleKeyPress={handleKeyPress}
          />
        </div>
      )}
    </div>
  );
}
