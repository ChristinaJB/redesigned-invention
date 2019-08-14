import React, {Component} from 'react';
// import data from './data.json'
import './MovieApp.css'


class MovieApp extends Component  {
  render(){
    console.log(this.props)
const {Title, Director, Cast, image} = this.props

  
    return(
        <div className="movies">

          <div className="movie">
         <div>
         <img src={image} alt="Dvd cover"/>
         </div>
         <div>
          <p>
            TITLE: {Title}
          </p>
        
        </div>

        <div>
          <p>
            DIRECTOR: {Director}
          </p>
       
       </div>

       <p>
          CAST: {Cast[0]} {Cast[1]}
       </p>
       </div>
      
       
       
        </div>
    );
  }
}


// class Poster extends Component  {
//   render(){
//     const posterage = data.map((moviePoster, index)=>(

//       <h1 key={index}>{moviePoster.Image}</h1> 
//     )) ;
//     return(
//         <div>
//         {posterage}
       
//         </div>
//     );
//   }
// }




// example tat worked
// class Poster extends Component  {
//   render(){
    
//     return(
//         <div>
//         {data.map((movieData, index)=>{
//           return <h1 key={index}>{movieData.Title}</h1> 
//         })}
       
//         </div>
//     );
//   }
// }

  // const MovieData = this.props;

    // console.log(MovieData.MovieData[0].props.Title)
    // const {title} = this.props.MovieData.map((index, t)=>{
    //     return <h1 key={index}>{t}</h1>
    // })
      // console.log(MovieData)
  //  console.log(this.props.MovieData[0].props)

export default MovieApp;

