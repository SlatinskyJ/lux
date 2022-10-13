import React, {useEffect, useState} from 'react';
import AppBar from '../organisms/AppBar';
import Body from '../templates/Body';
import { initApp } from '../../utils/middleware';
import { Flat } from '../../model/flats.model';

function App() {
	const [flats, setFlats] = useState<Flat[]>([]);
	useEffect(() => {
		initApp(setFlats);
	}, []);

	return (
		<div>
			<AppBar />
			<Body flats={flats} />
		</div>
	);
}

export default App;
