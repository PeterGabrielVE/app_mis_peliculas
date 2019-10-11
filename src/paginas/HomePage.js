import React from 'react';
import axios from 'axios';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';

class HomePage extends React.Component{

	state = {
		peliculas:[],
		peliculaDestacada:"" 
	}

	componentDidMount(){
		this.getData()
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
				<Estrenos peliculas={this.state.peliculas} />
			</div>
			);
	}
}

export default HomePage;