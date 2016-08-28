import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class SearchForm extends Component {
  constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    handleTitleChange(e) {
      console.log(e);
      this.setState({title: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      var title = ReactDOM.findDOMNode(this.refs.title).value.trim();
      console.log("title to search " + title);
      if (!title) {
        console.log("fail");
        return;
      }
      this.props.onSearchSubmit({title: title});
      ReactDOM.findDOMNode(this.refs.title).value = '';

    }

    render() {
      return (
          <form className="searchForm" onSubmit={this.handleSubmit.bind(this)}>
           <input
            type="text"
            placeholder="Search for a flick..."
            ref = "title"
             />
           <input type="submit" value="Search" />
         </form>
      )
    }
}
