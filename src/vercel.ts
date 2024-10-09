import express from 'express';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes';
import { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config();

const app = express();
app.use(express.json());

// Definisikan rute
app.use('/api/category', categoryRoutes);

// Ekspor handler untuk digunakan Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
