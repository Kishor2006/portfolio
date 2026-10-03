import { getAIResponse } from '../services/aiService.js';
import { portfolioKnowledgeBase } from '../data/portfolioData.js';

export const handleChatMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    // Get AI response with portfolio context
    const aiResponse = await getAIResponse(message, portfolioKnowledgeBase);

    res.json({
      success: true,
      message: aiResponse
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your message. Please try again.'
    });
  }
};
