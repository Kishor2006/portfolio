import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Send a chat message to the AI assistant
 * @param {string} message - The user's message
 * @returns {Promise<{message: string}>} The AI response
 */
export const sendChatMessage = async (message) => {
  try {
    const response = await api.post('/api/chat', { message });
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};

/**
 * Send a contact form message
 * @param {Object} formData - The contact form data
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - The message
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendContactMessage = async (formData) => {
  try {
    const response = await api.post('/api/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};

export default api;
