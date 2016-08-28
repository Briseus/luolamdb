import React, { Component } from "react"
import MovieList from "./MovieList"

export default class MovieBox extends Component {

    constructor(props) {
        super(props)
        this.loadMoviesFromServer = this.loadMoviesFromServer.bind(this)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.loadMoviesFromServer()
        setInterval(this.loadMoviesFromServer, this.props.pollInterval)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
        data: nextProps.movies
        })
    }
    loadMoviesFromServer() {
        this.props.getAllMovies()
    }

    render() {
        return (
            <div className="movieBox">
                <h1>Movies</h1>
                <MovieList data={this.state.data} />
             </div>
        )
    }
}