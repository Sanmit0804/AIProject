import React, { useState } from "react";
import axios from "axios";
import remarkGfm from "remark-gfm";
import { Bot, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // or any other hljs theme


const Chatbot = ({ messages, input, loading, setInput, sendMessage, handleKeyPress }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Gemini AI Assistant</h3>
                        <p className="text-xs opacity-90">Powered by Google Gemini</p>
                    </div>
                    <div className="ml-auto">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-slate-50 to-slate-100">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[240px] px-3 py-2 rounded-lg text-sm ${msg.role === "user"
                                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-sm"
                                : msg.role === "system"
                                    ? "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 mx-auto text-center"
                                    : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-sm"
                                }`}
                        >
                            <div className="leading-relaxed whitespace-pre-wrap">
                                {msg.role === "assistant" ? (
<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw, rehypeHighlight]}
  className="prose prose-sm max-w-none prose-pre:bg-slate-900 prose-pre:text-white prose-code:text-purple-600"
>
  {msg.content}
</ReactMarkdown>

                                ) : (
                                    msg.content
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-slate-800 px-3 py-2 rounded-lg shadow-sm border border-slate-200 animate-pulse max-w-[240px]">
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                                <span className="text-xs">Thinking...</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-3 bg-white rounded-b-2xl border-t border-slate-200">
                <div className="flex space-x-2">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask me anything..."
                        className="flex-1 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                        rows={1}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={loading}
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot