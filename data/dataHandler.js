import axios from 'axios';
// List of API data
const bearer = 'Bearer j13bu7w1vk65r96ncr8jhx34bxuzj3';
const clientId = 'olkby41g61usnz0me31lvk88shp7mv';

const headers = {
	'Content-Type': 'text/plain',
	'Client-ID': clientId,
	Authorization: bearer,
};

// Data Handler System v.0.0.1
const getGame = async id => {
	try {
		const url = 'https://api.igdb.com/v4/games';
		const request = `fields: *; where id = ${id};`;
		const result = await axios.post(url, request, {
			headers: headers,
		});
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const searchGame = async searchField => {
	try {
		const url = 'https://api.igdb.com/v4/games';
		const request = `fields name,cover.url,platforms.abbreviation, genres.name,involved_companies.company.name,age_ratings.rating, age_ratings.synopsis,rating; search "${searchField}";`;
		const result = await axios.post(url, request, {
			headers: headers,
		});
		return result.data;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export { getGame, searchGame };
