require('dotenv').config();

const express = require('express');
const app = express();

const pool = require('./db');

app.get('/freelancers/hey', (req, res) => {
	res.status(200).json({ message: 'hey there' });
});

app.get('/freelancers/database', async (req, res) => {
	try {
		const res = await pool.query('SELECT NOW()');
		res.status(200).json({ rows: res.rows });
	} catch (err) {
		res.status(500).json({ error: err.stack });
	}
});

const listener = app.listen(3000, () => {
	console.log(`http://localhost:${listener.address().port}`);
});
