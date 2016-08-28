import React, { Component } from "react"

export default class Movie extends Component {
    render() {
        var imdbLink = "http://www.imdb.com/title/"+this.props.imdbId
       return (
        <div className="movie">
            <div className="col-xs-12">
                <img className="col-xs-4 img-fluid" src={this.props.poster} />
                <div className="col-xs-8">
                    <h2 className="movieName">
                        {this.props.id}+{this.props.name}
                    </h2>
                    <p > {this.props.type}</p>
                    <a href={imdbLink}>Link to imdb</a>
                </div>
             </div>
        </div>
    ) 
    }
}