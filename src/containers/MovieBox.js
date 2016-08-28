import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieBox from "./../Movies/MovieBox"
import * as MovieActions from "../actions/Movies"
import * as SearchActions from "../actions/Search"

function mapStateToProps(state) {

    return {
        movies: state.movies.allMovies
    }

}

function mapDispatchToProps(dispatch) {

    return bindActionCreators(Object.assign({}, MovieActions, SearchActions), dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBox)