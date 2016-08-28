import { combineReducers } from 'redux'
import {search} from "./Search"
import {movies} from "./Movies"

export const rootReducer = combineReducers({
    search,
    movies
})

