//PORT
const PORT = process.env.PORT || 3000;

//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
//const noteText = require('./db/db.json');

//Express App
const app = express();
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/db'));

//Express Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/dreaming', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/poem.html'));
});

app.get('/api/dreaming', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/end.html'));
});

app.get('/awake', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/end.html'));
});

//Listen
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});