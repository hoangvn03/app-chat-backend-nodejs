import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import initRoutes from './router/index.js';
// import { connectDatabase } from './config/connect.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  console.log('🚀 Server is running on port ' + listener.address().port);
});
