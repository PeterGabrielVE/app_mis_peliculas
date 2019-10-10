import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HomePage from '../paginas/HomePage';
import PeliculaDetalle from '../paginas/PeliculaDetalle';

class App extends Component{
  render(){
    return(

      <BrowserRouter>
         <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/detalles" component={PeliculaDetalle} />
        </div>
      </BrowserRouter>
      
    )
  }
}


export default App;
