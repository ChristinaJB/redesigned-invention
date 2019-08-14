const express = require('express');
const app = express();
const request = require('request');
let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=00f452eea0e8f88ec26f97fe84b22d74&language=en-US&page=1';
app.use(express.static('public'));


app.get('/', (req, res)=> {
    res.render('home.ejs');
})

app.get('/searchresults', (req, res)=> {
    request(url, (error, response, body)=>{
        if(!error && response.statusCode == 200){
            let getMovies = JSON.parse(body);
            let insertMovies = getMovies.results;
            
            console.log(getMovies.results[1].title);
            // let dog =getMovies.results[Math.floor(Math.random() * 10)];
            res.render('index.ejs', {insertMovies: insertMovies});
        }
    })
});
    
app.get('*', (req, res)=> {
    res.send('Error this page was not found');
})                

app.listen(3000, ()=> {
    console.log('Movies are listening!!');
});