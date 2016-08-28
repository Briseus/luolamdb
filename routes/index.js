var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/', db.homepage);
router.get('/api/movies', db.getAllMovies);
router.post('/api/movies', db.createMovie);
router.delete('/api/movies/:id', db.removeMovie);

module.exports = router;