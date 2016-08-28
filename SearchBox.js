import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchBox from "./../Search/SearchBox"
import * as MovieActions from "../actions/Movies"
import * as SearchActions from "../actions/Search"

function mapStateToProps(state) {
    
    return {
        results: state.search.searchResults
    }

}

function mapDispatchToProps(dispatch) {

    return bindActionCreators(Object.assign({}, MovieActions, SearchActions), dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)