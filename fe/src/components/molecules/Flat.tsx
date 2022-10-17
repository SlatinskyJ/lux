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
			<FlatTitle align="center">{title}</FlatTitle>
		</Tile>
	)
}

const Tile = styled.div`
  margin: 10px;
  width: 300px;
`

const Image = styled.img`
  width: 300px;
`

const FlatTitle = styled(Typography)`
  font-size: large;
`