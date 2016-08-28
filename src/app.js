import React, { Component } from "react"
import ReactDOM from "react-dom"
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import "babel-polyfill"
import "isomorphic-fetch"
import SearchBox from "./containers/SearchBox"
import MovieBox from "./containers/MovieBox"
import { store } from "./store/index"
import { Provider } from 'react-redux'
export default class Container extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <SearchBox url="https://www.omdbapi.com/?s="/>
            <MovieBox pollInterval={5000}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
  <Container />
  </Provider>,
  document.getElementById('content')
)
