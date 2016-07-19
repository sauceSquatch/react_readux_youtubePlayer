import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyChoVyW8YdDpZG7TQ35hqReIu8wfvKLnrg';

/// create a new component that produces HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    // YTSearch node module
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term}, (data) => {
      this.setState({ 
        videos: data,
        selectedVideo: data[0]
      });
    });

    //  in ES6 the data key and property can be named the same and condensed as:
    // YTSearch( {key: API_KEY, term: 'SURF TIME'}, (videos) => {
    //   this.setState({ videos });
    // });
    // I'm going to leave verbose for learning 
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// make sure the component gets added to the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
