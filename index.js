import express from 'express';
import process from 'process';

const app = express();

let singleNumber = 0;

//1. GET / -- this returns just a single number (starting from 0)
app.get('/', (req, res) => {
    
    res.send(`This is the single number: ${singleNumber}`);
});


// 2. POST /inc -- this increases the number
app.post('/inc', (req, res) => {
    const increase = singleNumber++;
    res.send(`The number is increasing: ${increase}`);
});


// 3. POST /dec -- this decreases the number
app.post('/dec', (req, res) => {
   
    const decrease = singleNumber--;
    res.send(`The number is decreasing: ${decrease}`);
  });


//4. POST /die -- this shuts down the server 

app.post('/die', (req, res) => {
    res.send(`killing the server and shutting down`);
    process.exit();
});


const port = 3009;
app.listen(port, () => {
    console.log("Example app listening on http://localhost:" + port);
});
