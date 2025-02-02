import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Load environment variables
const DB_NAME = process.env.DB_NAME || 'test'; 
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_DIALECT = process.env.DB_DIALECT

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT as any, 
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); 
  }
};

export default sequelize;
