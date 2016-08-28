import React, { Component } from "react"

export default class SearchResult extends Component {
  constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            title: ''
        }
    }

    handleTitleChange(e) {
      this.setState({title: e.target.value});
    }

    handleTypeChange(e) {
      this.setState({title: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault()

      var movie = {
        name: this.props.title,
        type: this.props.type,
        poster: this.props.poster,
        imdb_id: this.props.imdbId
      }
      this.props.addNew(null,movie)
    }

    render() {
      console.log(this.props)
      var imdbLink = "http://www.imdb.com/title/"+this.props.imdbId
      return (
          <div className="col-xs-12">
            <div className="card " style={{maxWidth: 300}}>
           <img className="card-img-top" src={this.props.poster} alt="poster"  />
           <div className="card-block">
           <h4 className="card-title">{this.props.title}</h4>
           <text className="card-text">{this.props.type}</text>
           <a href={imdbLink}>Link to imdb</a>
            <form onSubmit={this.handleSubmit} >
            <input className="btn btn-primary" type="submit" value="Add to list" />

           </form >
           </div>
           </div>
        </div>
      )
    }
}