//PORT
const PORT = process.env.PORT || 3000;

//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const nounText = require('./db/nouns.json');

//Express App
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/db'));

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
    res.json(nounText);
});

app.get('/awake', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/end.html'));
});

//POST
app.post('/api/dreaming', function(req, res) {
    nounText.push(req.body);
    fs.writeFile('db/nouns.json', JSON.stringify(nounText), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Appended!');
    });

    res.json(req.body);
});

//DELETE
//app.delete('/api/notes/:id', function(req, res) {
//    const chosen = req.params.id;
//
//    nounText.forEach((note) => {
//        if (note.id === chosen) {
//            const noteIndex = noteText.indexOf(note);
//            noteText.splice(noteIndex, 1);
//        }
//    });
//
//    fs.writeFile('db/db.json', JSON.stringify(noteText), function(err) {
//        if (err) {
//            return console.log(err);
//        }
//    });
//
//    res.json(noteText);
//});

//Listen
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});