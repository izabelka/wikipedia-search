import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
  		entry: "Te"
    };
	}

  getEntries() {

    return $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&origin=*&search=Te')
      .then((data) => {
      	console.log(data)
      });
  }
  render() {
    return (
      <div className="container">
      	<a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random">Random Wikipedia Article</a>
      </div>
    );
  }

  componentDidMount() {
  	this.getEntries();
  }
}

export default App;
