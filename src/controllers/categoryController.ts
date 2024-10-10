import { Request, Response } from 'express';
import Category from '../models/Category';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    console.log('categories', categories);
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories', trace: error });
  }
};
