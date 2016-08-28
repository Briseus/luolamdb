import { searchResults, clearResults } from "./../actions/Search"

function initialState() {
    return {
        searchResults: []
    }
}

export function search(state, action) {
    var previousState = (state ? state : initialState())
    let results
    switch (action.type) {
        case 'GET_SEARCH_RESULTS':
            results = action.results
            return {searchResults: results}
        case 'CLEAR_SEARCH_RESULTS': 
            results = []
            return {searchResults: results}
        default:
            return previousState

    }
}