import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import TituloSeccion from '../componentes/TituloSeccion';


class HomePage extends React.Component{

	state = {
		peliculas:[],
		peliculaDestacada:"",
		proximos_estrenos:[]
	}

	componentDidMount(){
		this.getData()
		this.getProximosEstrenos()
	}

	getProximosEstrenos= async ()=>{

		try{
			const resultados = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c3df82229c56b91a48d095befaca0bfc&language=es')
			
			this.setState({
				proximos_estrenos:resultados.data.results
		})
		}catch(error){
			console.log(error.message)
		}

		
	}


	getData = async ()=>{

		try{
			const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c3df82229c56b91a48d095befaca0bfc&language=es')
			console.log(resultados.data.results)
			this.setPeliculasDestacadas(resultados.data.results)
			this.setState({
				peliculas:resultados.data.results
		})
		}catch(error){
			console.log(error.message)
		}

		
	}

	setPeliculasDestacadas(peliculas){

		const peliculaDestacada = peliculas[Math.floor(Math.random()*peliculas.length)]
		this.setState({
			peliculaDestacada
		})
	}


	render(){
		return(
			<div>
				<Destaque pelicula={this.state.peliculaDestacada}/>
				<TituloSeccion>Estrenos:</TituloSeccion>
				<Estrenos peliculas={this.state.peliculas} />
				<TituloSeccion>Proximamente:</TituloSeccion>
				<Estrenos peliculas={this.state.proximos_estrenos} />
			</div>
			);
	}
}

export default HomePage;