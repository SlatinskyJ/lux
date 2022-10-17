const {fetchFlats} = require('sreality-client');
const flatModel = require('./models/flat.model');

function mapData(data) {
	let mappedData = [];
	data.forEach((flat) => {
		mappedData.push([
			flat.description,
			flat.images[0]
		]);
	});

	return mappedData;
}

async function getFlats(pageNumber, pageSize = 20) {
	try {
		const flats = await fetchFlats(pageNumber, pageSize, 'municipality', 3468);
		return mapData(flats);
	} catch (e) {
		console.error(e);
	}

}

async function scrape(client, maxItemsToScrape, itemsPerPage) {
	let requests = [];
	let result = [];

	//getData
	for (let pageNumber = 1; (pageNumber - 1) * itemsPerPage < maxItemsToScrape; pageNumber++) {
		requests.push(getFlats(pageNumber, itemsPerPage));
	}
	const data = await Promise.all(requests);
	data.forEach((request) => {
		result.push(...request);
	})

	//saveData
	try {
		await flatModel.createFlats(client, result);
	} catch (e) {
		console.error(e);
		throw e;
	}
}

module.exports = {
	scrape
};