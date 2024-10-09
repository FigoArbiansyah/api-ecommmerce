import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Konfigurasi koneksi ke database MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD, // Ganti dengan password database Anda
  database: process.env.DB_DATABASE, // Ganti dengan nama database Anda
});

export default db;
