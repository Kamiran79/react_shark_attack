import React from 'react';

import LiveStudent from '../components/LiveStudent/LiveStudent';

import studentsData from '../helpers/data/studentsData';

import './App.scss';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyards from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    liveStudents: [],
  }

  componentDidMount() {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
  }

  render() {
    const { liveStudents } = this.state;
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <h1>Headers</h1>
        <button className="btn btn-info">SharkTank</button>
        <SharkTank />
        <LiveStudent liveStudents={liveStudents}/>
        <Graveyards />
      </div>
    );
  }
}

export default App;

// some background links:

// https://cdn.wallpapersafari.com/77/36/efHpVU.jpg
// https://lh5.googleusercontent.com/proxy/B8DbyR1SBaqnv32GiGh5GzMcdohAoa64H5CcqFnzSwKKvLCLDHTMTKUP76N2XZiNHpn761cHhnXaQn49XadJU3ZpHoyhe3MkVJp8Lf0S4L5Y8u7X3oAZ0oUUzMhW5XfQ3qr2aZc
// https://live.staticflickr.com/3731/8959735934_9c1409ac83_b_d.jpg
// https://img5.goodfon.com/wallpaper/nbig/6/76/atlantida-mificheskii-ostrov-gosudarstvo-andreas-rocha-atlan.jpg

/*
https://cdn1.edgedatg.com/aws/v2/abc/SharkTank/showimages/64413410dc1869bf2c8d7daacca1da84/1440x812-Q80_64413410dc1869bf2c8d7daacca1da84.jpg
https://simpletexting.com/wp-content/uploads/2018/11/SharkTank-Header.jpg
https://i.pinimg.com/originals/08/1f/8c/081f8cd08585e1040a8393c25b274126.gif
https://thumbs.gfycat.com/SecondWeightyCockerspaniel-size_restricted.gif

https://cdn.wallpapersafari.com/77/36/efHpVU.jpg
https://thumbs.gfycat.com/AgonizingDecisiveBullmastiff-size_restricted.gif
good for grave
https://slm-assets.secondlife.com/assets/16144863/original/gif_underwater.gif?1485169880

*/
