import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
  		entry: '',
  		results: [],
      resultsObj: []
    };
    this.getEntry = this.getEntry.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
	}

	getEntry(event) {
		let newEntry = event.target.value
    this.setState({
    	entry: newEntry
    });
  }

  submitEntry(event) {
  	event.preventDefault();
  	return $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&origin=*&search=' + this.state.entry)
      .then((data) => {
      	this.setState({
    			entry: '',
          results: data
    		});
        var sprArray = [],  b={"title":this.state.results[1][0], "description": this.state.results[2][0], "link": this.state.results[3][0]}
        console.log(sprArray)
        sprArray.push(b)
        console.log(sprArray)
      });
  }

  render() {
    // console.log(this.state.results[1])
    // console.log(this.state.results[2])
    // console.log(this.state.results[2][1])

    return (
      <div className="container">
      	<form onSubmit={this.submitEntry}>
	      	<input type="text" value={this.state.entry} onChange={this.getEntry} />
	      	<input type="submit" value="Search" />
      	</form>
      	<a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random">Random Article</a>
      </div>
    );
  }
}

export default App;
