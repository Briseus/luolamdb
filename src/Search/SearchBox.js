import React, { Component } from "react"
import SearchForm from "./SearchForm"
import SearchList from "./SearchList"

export default class SearchBox extends Component {
  constructor(props) {
        super(props);
        this.state = {
            data: []
        }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.results
    })
  }
  handleSearchSubmit(title) {
    var url = this.props.url+title.title
    this.props.searchMovies(null,url)
  }
  render() {
    return (
      <div className="searchBox">
      <h1>Search for a movie</h1>
          <SearchForm onSearchSubmit={this.handleSearchSubmit.bind(this)}/>
          <SearchList data={this.state.data} addNew={this.props.addNew}/>
      </div>
    )
  }
}