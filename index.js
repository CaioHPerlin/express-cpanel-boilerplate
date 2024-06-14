const express = require('express');
const app = express();

app.get('/freelancers/hey', (req, res) => {
	res.status(200).json({ message: 'hey there' });
});

const listener = app.listen(3000, () => {
	console.log(`http://localhost:${listener.address().port}`);
});
