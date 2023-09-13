const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();


// app.use(express.static('public'));
app.use(express.json()); // unless this line, post method will not work
app.use(cors()); //works for get method only
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.use('/api', require('./api'));


let server = app.listen(4000, (res) => {
    console.log('Listening on port 4000')
});

server.setTimeout(2000);

mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(() => {
    console.log('Database connected!')
}).catch(error => {
    console.log(error);
});






//app.get('/api', (req, res) => res.send('Its working!'));
// app.use((err, req, res, next) => {
//     res.status(422).send({ error: err.message });
// });