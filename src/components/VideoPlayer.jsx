var VideoPlayer = (props) => {
  console.log('vid id', props.video.id.videoId);
  var url = 'https://www.youtube.com/embed/' + props.video.id.videoId;
  console.log('url',url);
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
        <script>
          VideoListEntry
        </script>
      </div>
    </div>
    );
};


//i want this videoplayer to have an eventlistener that listens to videolistentry's onClick

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;

