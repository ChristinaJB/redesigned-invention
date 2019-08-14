import React, {Component} from 'react';
import data from './data.json'

import './App.css';
import MovieApp from './MovieApp.js';



class App extends Component  {
 
    

  render(){
  const MovieData =  data.map((m)=>{
    console.log(m.id)
    return <MovieApp key={m.id} {...m} /> 
  })


    

    return(
      <div>
      <h1>These are three of my favorite movies:</h1>
      { MovieData}
         
      </div>
        
    );
  }
}

export default App;


