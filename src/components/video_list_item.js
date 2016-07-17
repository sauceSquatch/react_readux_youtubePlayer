import React from 'react';

// this is the verbose way to set video prop
// const VideoListItem = (props) => {
//   const video = props.video;
  
//   return <li>video</li>
// }


// ES6 way, by doing this it's saying there is a props.video property, please make a new var called the same name video
const VideoListItem = ({video}) => {
  console.log(video);
  return <li>video</li>
}

export default VideoListItem;
