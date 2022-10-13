const express = require('express');
const flatModel = require('./models/flat.model');
const { Client } = require('pg');
const { scrape } = require('./scrape');
require('dotenv').config();

const MAX_ITEMS_TO_SCRAPE = 10; //500
const ITEMS_PER_PAGE = 5; //20

const app = express();
const port = process.env.PORT || 3000;

const dbClient = new Client({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT
});
dbClient.connect();

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Origin');
	next();
});

app.get('/flats', (req, res) => {
	flatModel.getFlats(dbClient).then(response => {
		res.status(200).send(response);
	})
	.catch(error => {
		res.status(500).send(error);
	});
});

app.get('/scrape', (req, res) => {
	scrape(dbClient, MAX_ITEMS_TO_SCRAPE, ITEMS_PER_PAGE)
		.then(() => {
			res.status(200).send();
		})
		.catch((e) => {
			res.status(500).send(e);
		});
});

app.use(express.static('./build'));

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});