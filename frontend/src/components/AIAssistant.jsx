import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiSuggestedQuestions } from '../data/portfolio';
import { sendChatMessage } from '../services/api';

export default function AIAssistant() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    if (!message.trim() || isLoading) return;

    const userMessage = { role: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(message);
      const aiMessage = { role: 'assistant', content: response.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass rounded-3xl p-6 shadow-glass h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-green-500 rounded-full blur-sm"
            />
            <div className="relative w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <span className="text-sm font-medium text-gray-300">AI Assistant</span>
        </div>
        <Sparkles className="w-5 h-5 text-neon-blue" />
      </div>

      {/* Welcome Message */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">Ask me anything</h3>
        <p className="text-sm text-gray-400">
          about my skills, projects
          <br />
          or experience.
        </p>
      </div>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-0.5">
          <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-neon-blue" />
          </div>
        </div>
      </div>

      {/* Messages Area */}
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-64 scrollbar-thin scrollbar-thumb-neon-blue scrollbar-track-dark-800">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-3 rounded-xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-neon-blue/10 border border-neon-blue/30 ml-4'
                    : 'bg-white/5 border border-white/10 mr-4'
                }`}
              >
                <p className="text-gray-200">{msg.content}</p>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Suggested Questions */}
      {messages.length === 0 && (
        <div className="space-y-2 mb-4">
          {aiSuggestedQuestions.map((question, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => handleSuggestedQuestion(question)}
              className="w-full text-left px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-neon-blue/30 transition-all duration-300 group"
            >
              <span className="group-hover:text-neon-blue transition-colors">
                {question}
              </span>
            </motion.button>
          ))}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mt-auto">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            disabled={isLoading}
            className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-neon-blue transition-all"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
