import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import api from './api'
import { notFound, errorHandler } from './middleware/errors.middleware';

dotenv.config();

const app = express();

app.use('/api', api);

console.log('Environment', process.env.NODE_ENV)
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/dist'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..','client', 'dist', 'index.html'));
	});
}

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.status(200).json({
		message: '📦 Svelte Express Boilerplate 📦',
	});
});

app.use(notFound);
app.use(errorHandler);

// TESTING

export default app;