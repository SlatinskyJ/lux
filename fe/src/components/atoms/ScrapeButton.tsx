import React from 'react';
import {Box, Button, CircularProgress, Typography} from '@mui/material';
import {useScrape} from '../../utils/middleware';
import styled from 'styled-components';

interface Props {
	onSuccess: () => void;
}

export default function ScrapeButton({onSuccess}: Props) {
	const {scrape, done, isLoading} = useScrape(onSuccess);

	return (
		<StyledBox display="flex" width="100%" justifyContent="center">
			{isLoading && <CircularProgress/>}
			{!done && !isLoading && <Button
				onClick={scrape}
				variant="contained">
				<Typography variant="h5">Scrape</Typography>
			</Button>}
		</StyledBox>
	)
}

const StyledBox = styled(Box)`
  padding-top: 20px;
`