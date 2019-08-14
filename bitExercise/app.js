const express = require('express');
const app = express();
const request = require('request');
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
app.use(express.static('public'));
// let switchData = "";


app.get('/', (req, res)=>{          
     res.render('index.ejs', {insertRate: "", symbol:""});

});

app.get('/index', (req, res)=>{
    request(url, (error, response, body)=>{
        if(!error && response.statusCode == 200){
            let rateData = JSON.parse(body);
            var country = req.query.bitCoinRate;
            let switchData = rateData.bpi[country].rate;
            let symbol = rateData.bpi[country].symbol
            console.log(rateData.bpi[country].symbol);
           
            // if(req.query.bitCoinRate === "USD"){
            //     switchData = rateData.bpi.USD.rate ;
            // }
            // else if(req.query.bitCoinRate === "GBP"){
            //     switchData = rateData.bpi.GBP.rate;
            // }
            // else if(req.query.bitCoinRate === "EUR"){
            //     switchData = rateData.bpi.EUR.rate;
            // };
            
            res.render('index.ejs', {insertRate: switchData, symbol: symbol});
            
            
        };
    });
    
});


app.listen(3000, ()=> {
    console.log('App is listening!');
});