require('dotenv').config();

const express = require('express');
const app = express();

const pool = require('./db');

app.get('/freelancers/hey', (req, res) => {
	res.status(200).json({ message: 'hey there' });
});

app.get('/freelancers/database', (req, res) => {
	res.status(200).json({ pool: 'pool' });
});

const listener = app.listen(3000, () => {
	console.log(`http://localhost:${listener.address().port}`);
});
