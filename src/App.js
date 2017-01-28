import React, { Component } from 'react';
import $ from 'jquery';
import './reset.css';
import './App.css';
import Result from './Result';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
  		entry: '',
  		results: [],
      resultsObj: [],
      showResults: false
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
        var resultsArray = [], oneEntry = {}
          for (var j=0; j < 10; j++){
            oneEntry={"title": data[1][j], "description": data[2][j], "link": data[3][j]}
            resultsArray.push(oneEntry)
          }
      	this.setState({
    			entry: '',
          results: resultsArray,
          showResults: true
    		});
      });
  }

  render() {

    var resultList = this.state.results;
    resultList = resultList.map(function(result, index) {
      return(
        <Result key={ index }
          result={ result } />
      )
    }, this);

    var showResults = {
      'display': 'none'
    }

    if(this.state.showResults) {
        showResults = {
        'display': 'block'
      }
    }

    return (
      <div className="container">
        <div id="searching">
      	   <form onSubmit={this.submitEntry}>
	      	    <input type="text" value={this.state.entry} onChange={this.getEntry} />
	      	      <input type="submit" value="Search" />
      	   </form>
      	   <a id="random" target="_blank" href="https://en.wikipedia.org/wiki/Special:Random">Random Article</a>
        </div>
          <div style={showResults} id="result-list">
            {resultList}
          </div>
      </div>
    );
  }
}

export default App;
