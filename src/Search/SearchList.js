import React, { Component } from "react"
import SearchResult from "./SearchResult"
export default class SearchList extends Component {
  render() {
    if (this.props.data.length >= 1) {
      var searchNode = this.props.data.map((result) => {
      return(
        <SearchResult title={result.Title}
          key={result.imdbID}
          type={result.Type}
          poster={result.Poster}
          imdbId={result.imdbID}
          onSearchSubmit={SearchResult.handleSubmit}
          addNew={this.props.addNew}
          />
      )
    })
    }
    return (
      <div>
        {searchNode}
      </div>
    )
  }
}