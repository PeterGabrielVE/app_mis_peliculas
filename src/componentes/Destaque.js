import React from 'react'
import styled,{ createGlobalStyle } from 'styled-components'

const Inicio = styled.div`   
		background: rgba(55,71,79,1);
		color:white;
		font-family:'Anton',sans-serif;
		`
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
	body{
		margin:0;
	}
`;

export default ()=>(
	<div>
      <GlobalStyle />
     <Inicio>Pelicula destacada</Inicio>
    </div>
	
	)