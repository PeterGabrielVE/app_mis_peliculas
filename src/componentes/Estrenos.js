import React from 'react'
import styled from 'styled-components'

const urlbaseImage = 'https://image.tmdb.org/t/p/w154'

const Contenedor = styled.div` 
>ul{
	background:rgba(65,165,245,1);
	padding-left:0;
	overflow:scroll;
	display:flex;
	align-items:strech;
}
`
const ItemPelicula = styled.li` 
	list-style:none;
	background:url(${props=>urlbaseImage+props.pelicula.poster_path}) no-repeat;
	background-size:cover;
	color:yellow;
	display:inline-block;
	min-width:200px;
	margin:5px;
	height:300px;
	font-family:'Amatic SC',cursiva;
	font-size:22px;
	font-weight:bold;
	>span{
		display:none;
		background:rgba(38,50,56,0.5);
	}
	&:hover{
		>span{
		display:block;
		
		}
	}

`

export default ({peliculas})=>(
	<Contenedor>
		<ul>
			{
				peliculas.map(pelicula=>(
					<ItemPelicula key={pelicula.id} pelicula={pelicula}>
						<span>{pelicula.title}</span>
					</ItemPelicula>))
			}
		</ul>
	</Contenedor>
	
	)