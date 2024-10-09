import { Request, Response } from 'express';
import db from '../config/db'; // Import koneksi database

// Fungsi untuk mendapatkan semua kategori
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const [categories] = await db.query('SELECT * FROM category');
    console.log('categories', categories);
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};
