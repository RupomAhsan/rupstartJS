import express from 'express';

import path from 'path';

import open from 'open';

//var webpack =require('webpack');

//var config =require('../webpack.config.dev.js');



const port = 3000;

const app = express();

//var compiler = webpack(config);

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../src/index.html'));

});



app.listen(port, function(err) {

    if(err) {

        console.log(err);

    } else {

        open('http://localhost:' + port);

    }

});
