// models/Category.ts
import { DataTypes, Model } from 'sequelize';
import db from '../config/db'; // Import koneksi database

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'categories',
    timestamps: true, // Menggunakan timestamps otomatis dari Sequelize
    createdAt: 'created_at', // Alias untuk kolom createdAt
    updatedAt: 'updated_at', // Alias untuk kolom updatedAt
  }
);

export default Category;
