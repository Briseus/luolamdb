import React, { Component } from "react"
import Movie from "./Movie"

export default class MovieList extends Component {
    render() {
        var movieNodes = this.props.data.map((movie) => {
            return (
                    <Movie name={movie.name}
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    type={movie.type}
                    imdbId={movie.imdb_id}>
                    </Movie>
                )
            }
        )
        return (
            <div className="movieList">
                {movieNodes}
            </div>
        )
    }
}