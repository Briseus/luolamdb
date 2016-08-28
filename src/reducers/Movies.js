import { addMovie, allMovies } from "./../actions/Movies"

function initialState() {
    return {
        allMovies: [],
        movie: {}
    }
}

export function movies(state, action) {
    var previousState = (state ? state : initialState())
    let movies
    switch (action.type) {
        case 'ADD_MOVIE':
            movies = state.allMovies.concat(action.movie)
            return {allMovies: movies}
        case 'ALL_MOVIES':
            movies = action.movies
            return {allMovies: movies}
        default:
            return previousState

    }
}