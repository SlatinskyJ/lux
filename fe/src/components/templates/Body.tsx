import React, {useState} from 'react';
import {Box, CircularProgress, Pagination, Grid, Paper, Container} from '@mui/material';
import styled from 'styled-components';
import ScrapeButton from '../atoms/ScrapeButton';
import FlatTile from '../molecules/Flat';
import {Flat} from '../../model/flats.model';
import {useFetch} from '../../utils/middleware';

export default function Body() {
	const [page, setPage] = useState<number>(1);
	const {data: flats, isPending, error, fetchData} = useFetch<Flat[]>(`/flats?pageNumber=${page}`);

	const displayScrapeButton = !isPending && !error && (flats === undefined || flats.length === 0);

	return (
		<StyledContainer maxWidth={false} disableGutters>
			<StyledPaper elevation={4}>
				{displayScrapeButton && <ScrapeButton onSuccess={fetchData}/>}
				{isPending && <CircularProgress/>}
				{error && <span>{JSON.stringify(error)}</span>}
				{!error && flats && flats.length > 0 && (
					<>
						<Grid container spacing={3} justifyContent="center">
							{flats.map((flat, index) => (
								<Grid item key={index}>
									<FlatTile title={flat.title} img={flat.image}/>
								</Grid>)
							)}
						</Grid>
						<Box display="flex" width="100%" justifyContent="center">
							<Pagination count={25} size="large" page={page}
										onChange={(e: React.ChangeEvent<unknown>, value: number) => {
											setPage(value);
										}}/>
						</Box>
					</>)
				}
			</StyledPaper>
		</StyledContainer>

	)
}

const StyledContainer = styled(Container)`
  max-width: 1440px;
  margin-top: 100px;
`

const StyledPaper = styled(Paper)`
  padding: 0 20px 20px 20px;
`