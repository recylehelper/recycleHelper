const express = require('express');
const path = require('path');
const app = express();
const zipObj = require('./zipCodesObj.js');
const passport = require('passport');
const cors = require('cors');
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const port = 3005

app.use(express.json({urlencoded:true}));
auth(passport);
app.use(passport.initialize());
app.use(cookieSession({
    name: 'session',
    keys: ['123']
}));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname,'../public')))

app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '');
        res.json({
            status: 'session cookie not set'
        });
    }
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/');
    }
);

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
}) ;



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
