import React from 'react';
import {Typography} from '@mui/material';
import styled from 'styled-components';

interface Props {
	title: string,
	img: string
}

export default function FlatTile({title, img}: Props) {
	return (
		<Tile>
			<Image src={img} alt="Flat image missing"/>
			<FlatTitle>{title}</FlatTitle>
		</Tile>
	)
}

const Tile = styled.div`
	margin: 10px;
  	width: 350px;
`

const Image = styled.img`
  	width: 350px;
`

const FlatTitle = styled(Typography)`
  	font-size: large;
  	padding-left: 10px;
`