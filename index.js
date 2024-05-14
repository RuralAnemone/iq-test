const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use(express.json()); // Add this line to parse JSON bodies

app.post('/upload', (req, res) => {
	// Handle the POST request to /upload here
	res.send('File uploaded successfully!');
	console.log(req);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
