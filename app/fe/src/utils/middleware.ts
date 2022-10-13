import {Flat} from '../model/flats.model';

export async function initApp(setFlats: (data: Flat[]) => void) {
	try {
		fetch('http://localhost:8080/flats', {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				return response.json();
			})
			.then(result => {
				setFlats(result);
			})
			.catch(e => {console.error(e)});
	}
	catch(e) {
		console.error(e)
	}
}