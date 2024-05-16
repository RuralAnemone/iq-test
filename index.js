const express = require('express');
const path = require('path');
const process = require('process');
const sheetdb = require('sheetdb-node');

const urls = process.env.SHEETDB_URLS.split(',');

const client = sheetdb({ address: urls[Math.floor(Math.random() * urls.length)] });

const expressApp = express();
// const publicPath = path.join(__dirname, 'public');

// expressApp.use(express.static(publicPath));
// expressApp.use(express.static(path.join(publicPath, 'math')));
// expressApp.use(express.static(path.join(publicPath, 'clock')));
// expressApp.use(express.static(path.join(publicPath, 'lincoln')));
// expressApp.use(express.static(path.join(publicPath, 'grant')));
// expressApp.use(express.static(path.join(publicPath, 'ur-done')));
expressApp.use(express.json()); // Add this line to parse JSON bodies

expressApp.get('/upload', (req, res) => {
	res.status(200).send('do a post request numbnuts');
});

expressApp.post('/upload', (req, res) => {
	console.log(req.body);
	// if req.body is empty send 204, or if all fields are empty
	if (Object.keys(req.body).length === 0 || Object.values(req.body).some(value => value == null)) {
		if (Object.values(req.body).every(value => value == null)) res.status(204).send('No data to append');
		res.status(206).send('Some fields are empty');
		return;
	}

	res.status(202).send('data accepted');

	try {
		const data = transformData(req.body);
		client.create(
			{
				id: 'INCREMENT',
				timestamp: 'TIMESTAMP',
				'math input': data.math.input,
				'math correctAnswer': data.math.correctAnswer,
				'clock input': data.clock.input,
				'clock correctAnswer': data.clock.correctAnswer,
				'clock input (string)': data.clockString.input,
				'clock correctAnswer (string)': data.clockString.correctAnswer,
				'lincoln input': data.lincoln.input,
				'grant input': data.grant.input,
				grade: req.body.grade,
				timesCheated: req.body.timesCheated,
			},
			'data'
		);
	} catch (error) {
		console.error(error);
		res.status(500).send(`Error: ${error.message}; ${JSON.stringify(error)}`);
	}
});

const PORT = 3000;
expressApp.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

function transformData(data) {
	const output = {}; // "immutable" my ass

	/*
	const numToTimeStr = num => {
		let hour = Math.floor(num / 60) + 1
		let minute = num % 60
		return `${hour}:${minute < 10 ? "0" : ""}${minute}`
	}
	*/

	output.clockString = JSON.parse(data.clock);
	output.clock = {
		input: clockStringToMinutes(output.clockString.input),
		correctAnswer: clockStringToMinutes(output.clockString.correctAnswer),
	};
	output.math = JSON.parse(data.math);
	output.lincoln = JSON.parse(data.lincoln);
	output.grant = JSON.parse(data.grant);

	return output;
}

function clockStringToMinutes(clockString) {
	const [hours, minutes] = clockString.split(':');
	return +hours * 60 + +minutes;
}
