import {clearResults} from "./Search"

export const allMovies = (movies) => {
    return {
        type: 'ALL_MOVIES',
        movies: movies
    }
}

export const addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        movie: movie
    }
}

export function getAllMovies(dispatch) {
    return function(dispatch, getState) {
        let state = getState()

        return fetch('http://localhost:3000/api/movies')
            .then((response) => {
                if(response.ok) {
                    return response.json()
                }
            })
            .then((movies) => {
               return dispatch(allMovies(movies.data))
            })
            .catch((error) => {
                console.log(error)
            })

    }
}

export function addNew(dispatch, movie) {

    return function (dispatch, getState) {

        let state = getState()
        console.log(movie)
        dispatch(clearResults())
        movie.id = Date.now()
        dispatch(addMovie(movie))
        return fetch('http://localhost:3000/api/movies', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: movie.name,
                    type: movie.type,
                    poster: movie.poster,
                    imdb_id: movie.imdb_id
                })
              })
              .then((response) => {
                  console.log(response)
                    if(response.ok) {
                        getAllMovies()
                    }
                    throw Error("Failed to add movie")
              })
              .catch((error) => {
                    console.log(error)
              })

    }

}