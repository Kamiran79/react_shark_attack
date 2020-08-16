import React from 'react';
import PropType from 'prop-types';
// import LiveStudent from '../components/LiveStudent/LiveStudent';

import studentsData from '../helpers/data/studentsData';

import './App.scss';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyards from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    liveStudents: [],
    message: PropType.string,
  }

  componentDidMount() {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
    // eslint-disable-next-line prefer-const
    const message = '';
    this.setState({ message });
  }

  sharkAttack = (id) => {
    studentsData.followTheLight(id);
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
  }

  updateMessage = (m) => {
    const message = m;
    this.setState({ message });
  }

  sharkAttackEvent = (e) => {
    e.preventDefault();
    const { liveStudents } = this.state;
    let message = '';
    if (liveStudents.length === 0) {
      message = 'There is no more students to feed';
      this.updateMessage(message);
    } else {
      const max = Math.floor(liveStudents.length - 1);
      const min = 1;
      // const getRandom = Math.ceil(Math.random(1));
      const randomNum = Math.floor(Math.random() * (max - min) + min);
      // console.warn('return student id getrandom ', getRandom);
      // console.warn('return student id randomNum ', randomNum);
      const getme = liveStudents[randomNum].id;
      // console.warn('return student id getme ', getme);
      // console.warn('return student id getrandom ', getRandom);
      this.sharkAttack(getme);
      console.warn('got excute');
      message = '';
      this.updateMessage(message);
    }
  }

  render() {
    const { liveStudents, message } = this.state;
    return (
      <div className="App">
        <h1 className="app_h2">Shark Attack</h1>
        <span className="app_logo"><p className="app_logo1">. .</p></span>
        {/* <img src="https://thumbs.gfycat.com/AgonizingDecisiveBullmastiff-size_restricted.gif" alt="back" /> */}
        <i class="fas fa-icicles shapFont"><button className="centered btn" onClick={this.sharkAttackEvent}>Feed The Shark</button></i>
        <h4 className="app_message">{ message }</h4>
        <SharkTank liveStudents={liveStudents} sharkAttack={this.sharkAttack}/>
        <Graveyards />
      </div>
    );
  }
}

export default App;

// pattern for the title
// https://media.seamwork.com/2019/01/04-ice-dyeing.jpg

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

This is for home icon or whatever
https://www.vhv.rs/dpng/d/555-5557767_shark-animated-cartoon-clip-art-animated-shark-png.png

*/
