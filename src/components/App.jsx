class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null, 
      videos: []
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        videos: videos,
        video: videos[0]
      })
    );
  }

  updateStateOfApp (clickedVideo) {
    // console.log('i got clicked!');
    this.setState ({
      video: clickedVideo, //video that will play onClick
    });
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/> 
        </div>
        <div className="col-md-5">
          <VideoList 
            updateStateOfApp={this.updateStateOfApp.bind(this)} 
            videos={this.state.videos}
          />
        </div>
      </div>
    );
    
  }
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
