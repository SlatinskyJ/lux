const format = require('pg-format');

const getFlats = (client) => {
	return new Promise((resolve, reject) => {
		client.query("SELECT * FROM flats")
			.then(results => {
				resolve(results.rows);
			})
			.catch(error => {
				console.error(error);
				reject(error);
			});
	});
};

const createFlats = (client, body) => {
	return new Promise((resolve, reject) => {
		client.query(format('INSERT INTO flats (title, image) VALUES %L', body))
		.then(() => {
			resolve(`New flats has been added.`);
		})
		.catch(error => {
			console.error(error);
			reject(error);
		});
	});
};

module.exports = {
	getFlats,
	createFlats
};