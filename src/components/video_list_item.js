import React from 'react';

// this is the verbose way to set video prop
// const VideoListItem = (props) => {
//   const video = props.video;
  
//   return <li>video</li>
// }


// ES6 way, by doing this it's saying there is a props.video property, please make a new var called the same name video
const VideoListItem = ({video}) => {
  
  const imageURL = video.snippet.thumbnails.default.url;

  return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={imageURL} className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
        
      </li>
    );
};

export default VideoListItem;
