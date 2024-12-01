// src/server.ts

import app from './app';
import { connectDB } from './config/db';
import sequelize from './config/db';
import './models/snippet';
import './models/tag';
import './models/snippetTag';
import './models/user';
import './models/comment';
import './models/snippetVersion';

const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

sequelize.sync().then(() => {
  console.log('Tables synced with the database.');
}).catch((err) => {
  console.error('Error syncing tables:', err);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
