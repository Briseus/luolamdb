import {clearResults} from "./Search"
import {host} from "./../../host"

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

        return fetch(host)
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
        dispatch(clearResults())
        movie.id = Date.now()
        dispatch(addMovie(movie))
        return fetch(host, {
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