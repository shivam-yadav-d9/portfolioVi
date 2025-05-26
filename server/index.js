import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT, () =>
    console.log(` Server running on http://localhost:${process.env.PORT}`)
  );
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
