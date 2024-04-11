import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import RedisStore from "connect-redis"
import session from "express-session"
import {createClient} from "redis"

import api from './api'
import { notFound, errorHandler } from './middleware/errors.middleware';

dotenv.config();

const app = express();

// Initialize client.
const redisClient = createClient()
redisClient.connect().catch(console.error)

// // Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "homewebapp:",
})

// // Initialize session storage.
app.use(
  session({
	name: 'haid',
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
  }),
)

const frontendPath = path.resolve(__dirname, '..', 'frontend')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use('/api', api);

console.log('Environment', process.env.NODE_ENV)
if (process.env.NODE_ENV == 'production') {
	app.use(express.static(frontendPath));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(frontendPath,'index.html'));
	});
}

app.get('/', (req, res) => {
	res.status(200).json({
		message: '📦 Svelte Express Boilerplate 📦',
	});
});

app.use(notFound);
app.use(errorHandler);

export default app;