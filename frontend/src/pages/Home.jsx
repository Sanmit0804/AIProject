import { Bot, Cpu, Shield, Sparkles, Zap } from 'lucide-react';
import React, { useState } from 'react'

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                                <div className="relative bg-slate-900 p-4 rounded-full border border-purple-500/50">
                                    <Cpu className="h-12 w-12 text-purple-400" />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                            AI Projects Hub
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            Exploring the future with cutting-edge artificial intelligence solutions
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                                Explore Projects
                            </button>
                            <button className="cursor-pointer border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Powered by Intelligence</h2>
                    <p className="text-slate-400 text-lg">Advanced AI capabilities at your fingertips</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                            <Sparkles className="h-8 w-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Smart Conversations</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Engage with our advanced AI chatbot powered by Gemini for intelligent, context-aware conversations.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="h-8 w-8 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Experience real-time responses with optimized performance and seamless user interactions.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                            <Shield className="h-8 w-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Built with privacy in mind, ensuring your conversations remain secure and confidential.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience AI?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Click the chat button to start a conversation with our Gemini-powered assistant
                    </p>
                    <div className="flex justify-center">
                        <Bot className="h-16 w-16 text-purple-400 animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home