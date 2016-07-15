import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyChoVyW8YdDpZG7TQ35hqReIu8wfvKLnrg';

YTSearch( {key: API_KEY, term: 'SURF TIME'}, function(data) {
  console.log(data);
});

/// create a new component that produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// make sure the component gets added to the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
