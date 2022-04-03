const express = require('express')
const axios = require('axios')
const app = express()
const fs = require('fs');
const http = require('http');
const server =http.createServer(()=>{
    console.log('request made')
})
const input = process.argv;
const city = input[2];
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d2ee65b7c1b9528dc78762912ae0321`)
    .then(function (response) {
        console.log(response.data);
    })
app.listen(5500, () => {
    console.log('listening on port 5500')
})

// type =>    node script 'name of city for its weather'