import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './routes/chat.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
//   console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
// });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📡 API endpoints available at /api`);
});
