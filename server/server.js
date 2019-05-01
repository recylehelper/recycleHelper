const express = require('express');
const path = require('path');
const app = express();


app.use(express.json({urlencoded:true}));
app.use(express.static(path.join(__dirname,'../public')))

const port = 3005

app.get('/api/products', (req, res) => {
    res.end();
})


app.listen(port, (err, success) => {
    if (err) {
        console.log('error connecting to server');
    } else {
        console.log(`Connection at port ${port} successful`)
    }
})