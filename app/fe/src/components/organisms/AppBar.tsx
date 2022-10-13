import React from 'react';
import {Box, IconButton, Toolbar, Typography} from '@mui/material';
import {AppBar as MuiAppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBar() {
	return (
		<Box sx={{flexGrow: 1}}>
			<MuiAppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{mr: 2}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
						Header
					</Typography>
				</Toolbar>
			</MuiAppBar>
		</Box>
	)
}