import React from 'react';
import {Box, Toolbar, Typography, AppBar as MuiAppBar} from '@mui/material';

export default function AppBar() {
	return (
		<Box sx={{flexGrow: 1}}>
			<MuiAppBar position="fixed">
				<Toolbar>
					<Typography variant="h4" component="div" sx={{flexGrow: 1}} align="center">
						Sample application
					</Typography>
				</Toolbar>
			</MuiAppBar>
		</Box>
	)
}