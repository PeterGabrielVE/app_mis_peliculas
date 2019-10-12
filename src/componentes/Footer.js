
import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'

const Contenedor = styled.div` 
	background:rgba(0,0,0,0.5);
	padding:20px;

`
export default ()=>(
	<Contenedor>
		<img src={Logo} alt="logo moviedb" width="200" height="75"/>
	</Contenedor>
	)