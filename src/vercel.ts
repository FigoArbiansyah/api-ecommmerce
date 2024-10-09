import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node';
import categoryRoutes from './routes/categoryRoutes';

// Inisialisasi aplikasi Express
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Tambahkan routing untuk kategori
app.use('/api/category', categoryRoutes);

// Handler untuk Vercel (menggunakan vercel proxy request ke Express)
export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
