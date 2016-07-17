import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyChoVyW8YdDpZG7TQ35hqReIu8wfvKLnrg';

/// create a new component that produces HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch( {key: API_KEY, term: 'SURF TIME'}, (data) => {
      this.setState({ videos: data });
      console.log("data", this.state.videos);
    });

    //  in ES6 the data key and property can be named the same and condensed as:
    // YTSearch( {key: API_KEY, term: 'SURF TIME'}, (videos) => {
    //   this.setState({ videos });
    // });
    // I'm going to leave verbose for learning 
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// make sure the component gets added to the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
