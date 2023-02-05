var express = require('express');
var app = express();
var ejs = require('ejs')
var expressLayout = require('express-ejs-layouts')
app.set('view engine', 'ejs');

app.use(expressLayout);
let port = 3000;

const user1 = [
    {movie:"a",actors:"act1, act2",director:'d1'},
    {movie:"b",actors:"act1, act2",director:'d2'},
    {movie:"c",actors:"act1, act2",director:'d3'},
    {movie:"d",actors:"act1, act2",director:'d4'},
    {movie:"e",actors:"act1, act2",director:'d5'},
    {movie:"f",actors:"act1, act2",director:'d6'},
    {movie:"g",actors:"act1, act2",director:'d7'},
    {movie:"h",actors:"act1, act2",director:'d8'},
    {movie:"i",actors:"act1, act2",director:'d9'},
    {movie:"j",actors:"act1, act2",director:'d10'}
] 

const home_send = {
    "pawprint":'yjwyk'
} 


const about_send = {
    "name":'Yuva Teja Reddy Jonnala'
} 

app.get('/', (req, res)=>{
res.render('home.ejs',{
pawprint: home_send
});
});

app.get('/about',(req,res)=>{
    res.render('about.ejs',{
        name:about_send
    });
});

app.get('/movie',(req,res)=>{
    res.render('movie.ejs',{
        movies:user1
    });
})
app.listen(port,()=>{
    console.log("server listemning");
});