var pgp = require('pg-promise')();
var connection = "postgres://localhost:5432/luoladb";

var db = pgp(connection);

homepage = (req, res) => {
    res.sendFile( __dirname + "/" + "index.html" );
}

getAllMovies = (req, res, next) => {
    db.any('SELECT * FROM movies')
        .then((data) => {
            res.status(200)
                .json({
                    status: "success",
                    data: data,
                    message: "Retrieved all movies"
                })
        })
        .catch((error) => {
            return next(error)
        })
}

createMovie = (req, res, next) => {
    db.none('INSERT INTO movies(name, type, poster, imdb_id) ' 
            + 'VALUES (${name}, ${type}, ${poster}, $(imdb_id))',
            req.body)
            .then(() => {
                res.status(200)
                    .json({
                        status: "success",
                        message: "Added movie"
                    })
            })
            .catch((error) => {
                console.log(error)
                return next(error)
            })
}

removeMovie = (req, res, next) => {
    var movieId = parseInt(req.params.id)
    db.result('DELETE FROM movies WHERE id = $1', movieId)
        .then((result) => {
            res.status(200)
                .json({
                    status: "success",
                    message: "Removed ${result.rowCount} movie"
                })
        })
        .catch((error) => {
            return next(error)
        })
}

module.exports = {
  homepage: homepage,
  getAllMovies: getAllMovies,
  createMovie: createMovie,
  removeMovie: removeMovie
}