import React from 'react'
import styled from 'styled-components'

const ContenedorSearch = styled.div` 
	padding:5px;
	border: 1px solid white;
`
const InputSearch = styled.input` 
	background:none;
	border:none;
	height:22px;
	color:yellow;
	width:220px;
	margin-left:8px;
	&:focus{
		outline:none;
	}
	&::placeholder{
		color:#FFCA28;
	}
	`
const BotonClear = styled.a`                                                
	color:  white;
`

export default ({onChangeSearch,clear,search_text})=>(
	<ContenedorSearch>
		<i className="fa fa-search fa-lg" aria-hidden="true"></i>
			<InputSearch placeholder="Buscar" onChange={onChangeSearch} value={search_text}/>
		<BotonClear href="#" onClick={clear}><i className="fa fa-close fa-lg" aria-hidden="true"></i></BotonClear>
	</ContenedorSearch>
	)
