import React from 'react';
import axios from 'axios';
import Destaque from '../componentes/Destaque';
import Cast from '../componentes/Cast';

class PeliculaDetalle extends React.Component{

	state = {
		pelicula:""
	}

	componentDidMount(){
		console.log(this.props.match.params.peliculaid)
		const {peliculaid} = this.props.match.params
		this.getPeliculaDetalle(peliculaid)
		this.getCreditos(peliculaid)
	}

	getPeliculaDetalle = async (peliculaid)=>{
		try{
			const result = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaid}?api_key=c3df82229c56b91a48d095befaca0bfc&language=es`)
			console.log(result)
			this.setState({
				pelicula:result.data
			})
		}catch(error){
			console.log(error.message)
		}

	}

	getCreditos = async (peliculaid)=>{
		try{
			const result = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaid}/credits?api_key=c3df82229c56b91a48d095befaca0bfc&language=es`)
			console.log(result)
			this.setState({
				cast:result.data.cast
			})
		}catch(error){
			console.log(error.message)
		}
	}

	render(){
		return(
			<div>
			<Destaque pelicula={this.state.pelicula}></Destaque>
			<Cast cast={this.state.cast}></Cast>
			</div>
			);
	}
}

export default PeliculaDetalle