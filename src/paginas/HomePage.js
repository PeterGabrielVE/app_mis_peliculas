import React from 'react';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';

class HomePage extends React.Component{
	render(){
		return(
			<div>
				<Destaque />
				<Estrenos />
			</div>
			);
	}
}

export default HomePage;