const express = require('express');
const path = require('path');
const process = require('process');
const sheetdb = require('sheetdb-node');

const client = sheetdb({address:"https://sheetdb.io/api/v1/58f61be4dda40"});

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
	// res.status(202).send('accepted');
	// const message = req.body;
	// await webhook(JSON.stringify(message));
	// try and catch errors

	// if req.body is empty send 204, or if all fields are empty
	if (Object.keys(req.body).length === 0 || Object.values(req.body).every(value => value === '')) {
		res.status(204).send('No data to append');
		return;
	}

	console.log(req.body)

	res.status(202).send('data accepted');

	try {
		// await webhook(JSON.stringify(message));
		await appendDataToSheet({

			"id": "INCREMENT",
			"name": "Mike Rotchburns",
			"age": Math.floor(Math.random() * 10000 + 1),
			"score": Math.floor(Math.random() * 100 + 1),
			"address": JSON.stringify(req.body),
			"email": "mikey@rotchburns.gov",
			"lat": Math.random() * 180 - 90,
			"lon": Math.random() * 360 - 180,
			"img": "https://placebear.com/200/200"
		}, "large");
		res.status(200).send('Data appended to sheet');
	} catch(error) {
		console.error(error);
		res.status(500).send(`Error: ${error.message}; ${JSON.stringify(error)}`);
	}
});

const PORT = 3000;
expressApp.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

async function appendDataToSheet(data, sheet) {
	await client.create(data, sheet);
}