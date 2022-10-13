import React from 'react';
import {Grid, Paper} from '@mui/material';
import FlatTile from '../molecules/Flat';
import {Flat} from '../../model/flats.model';


export default function Body({flats}: { flats: Flat[] }) {
	return (
		<Paper square elevation={0}>
			<Grid container spacing={3} justifyContent="center">
				{flats.map((flat, index) => (
					<Grid item key={index}>
						<FlatTile title={flat.title} img={flat.image}/>
					</Grid>)
				)}
			</Grid>
		</Paper>
	)
}