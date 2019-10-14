import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from '../paginas/HomePage';
import PeliculaDetalle from '../paginas/PeliculaDetalle';
import Header from './Header';
import Footer from './Footer';


class App extends Component{
  render(){
    return(

      <BrowserRouter>
         <div className="App">
             <Header fecha={this.props.test.fecha} />
            <Route exact path="/" component={HomePage} />
            <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
            <Footer/>
        </div>
      </BrowserRouter>
      
    )
  }
}

function mapStateToProps({test}){
  return{test}
}


export default connect(mapStateToProps)(App);
