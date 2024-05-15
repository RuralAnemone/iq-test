const express = require('express');
const path = require('path');
const process = require('process');
const sheetdb = require('sheetdb-node');

const client = sheetdb("https://sheetdb.io/api/v1/58f61be4dda40");

const expressApp = express();
const publicPath = path.join(__dirname, 'public');

expressApp.use(express.static(publicPath));
// expressApp.use(express.static(path.join(publicPath, 'math')));
// expressApp.use(express.static(path.join(publicPath, 'clock')));
// expressApp.use(express.static(path.join(publicPath, 'lincoln')));
// expressApp.use(express.static(path.join(publicPath, 'grant')));
// expressApp.use(express.static(path.join(publicPath, 'ur-done')));
expressApp.use(express.json()); // Add this line to parse JSON bodies

expressApp.post('/upload', async (req, res) => {
	res.status(202).send('accepted');
	const message = req.body;
	// await webhook(JSON.stringify(message));
	// try and catch errors
	try {
		// await webhook(JSON.stringify(message));
		await appendDataToSheet([JSON.stringify(message)]);
	} catch(error) {
		console.error(error);
		res.status(500).send(`Error: ${error.message}; ${JSON.stringify(error)}`);
	}
});

const PORT = 3000;
expressApp.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

function appendDataToSheet(data) {

}