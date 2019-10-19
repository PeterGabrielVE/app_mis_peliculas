import React from 'react';
import Header from '../componentes/Header';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import TituloSeccion from '../componentes/TituloSeccion';
import {connect} from 'react-redux';
import {getEstrenos,getProximosEstrenos} from '../redux/actions/moviesAction';

import SearchResults from '../componentes/SearchResults'

class HomePage extends React.Component{

	componentDidMount(){
		this.props.getEstrenos()
		this.props.getProximosEstrenos()
		
	}

	renderResults = ()=>{
		const {data} = this.props.search

		if(data.length === 0){
			return(
				<div>
					<Destaque pelicula={this.props.estrenos.peliculaDestacada}/>
					<TituloSeccion>Estrenos:</TituloSeccion>
					<Estrenos peliculas={this.props.estrenos.data}/>
					<TituloSeccion>Proximamente:</TituloSeccion>
					<Estrenos peliculas={this.props.proximos_estrenos.data}/>
				</div>
			)
		}else{
			return(
					<SearchResults data={this.props.search.data}/>
				)
		}
	}

	render(){
		return(
				<div>
					<Header path={this.props.match.path}/>
					{this.renderResults()}
				</div>
		
		)
	}
}

function mapStateToProps({test,estrenos,proximos_estrenos,search}){
	return{

		estrenos,proximos_estrenos,search
	}
}

export default connect(mapStateToProps,{
	getEstrenos,getProximosEstrenos
})(HomePage);