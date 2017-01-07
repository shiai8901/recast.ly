// class ListVideo extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="video-list media">
//         <ul>
//           {this.props.map(video => <VideoListEntry video = {video} />)}
//         </ul>
//       </div>
//     );
//   }
// }
var VideoList = (props) => (
  <div className="video-list media">
    <ul>
      {console.log(props.videos)}
      {props.videos.map(video => <VideoListEntry video = {video} />)}

    </ul>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

