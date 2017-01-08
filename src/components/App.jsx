class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video: window.exampleVideoData[0], //current video playing // give it a default value
    };
  }

  updateStateOfApp (video) {
    console.log('i got clicked!');
    this.setState = ({
      video: video, //video that will play onClick
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/> 
        </div>
        <div className="col-md-5">
          <VideoList updateStateOfApp={this.updateStateOfApp.bind(this)} videos={window.exampleVideoData}/>
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
