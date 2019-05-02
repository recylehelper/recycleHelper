const express = require('express');
const path = require('path');
const app = express();
const zipObj = require('./zipCodesObj.js');
const fs = require('fs');

app.use(express.json({urlencoded:true}));
app.use(express.static(path.join(__dirname,'../public')))

const port = 3005

app.get('/api/products', (req, res) => {
    res.end();
})

app.get('/api/zipcodes', (req, res) => {
    if (zipObj[req.query.zip]) {
        res.send('success') 
    } else {
        res.send('not found')
    }
})




app.listen(port, (err, success) => {
    if (err) {
        console.log('error connecting to server');
    } else {
        console.log(`Connection at port ${port} successful`)
    }
})



//dummy request to make zip array into an obj for faster parsing
/*
app.get('/dummy', (req, res) => {
    const obj = {};

    for (let value of zipCodes.zipCodes) {
        obj[value] = 1
    }

    fs.writeFile('./zipCodesObj.json', JSON.stringify(obj), (err) => {
        if (err) {
            console.log('didn"t work');
            res.end()
        } else {
            res.end()
        }
    })
})
*/
