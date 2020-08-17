import React from 'react';
import PropType from 'prop-types';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyards from '../components/Graveyard/Graveyard';

import studentsData from '../helpers/data/studentsData';

import './App.scss';

class App extends React.Component {
  state = {
    liveStudents: [],
    dearlyBeloved: [],
    message: PropType.string,
  }

  componentDidMount() {
    const liveStudents = studentsData.livingStudents();
    const dearlyBeloved = studentsData.dearlyBeloved();
    const message = '';
    this.setState({ liveStudents, dearlyBeloved, message });
  }

  sharkAttack = (id) => {
    studentsData.followTheLight(id);
    const liveStudents = studentsData.livingStudents();
    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ liveStudents, dearlyBeloved });
  }

  updateMessage = (m) => {
    const message = m;
    this.setState({ message });
  }

  resetEvent = (e) => {
    e.preventDefault();
    const liveStudents = studentsData.putAllStudentsLive();
    console.warn('excute all live');
    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ dearlyBeloved });
    this.setState({ liveStudents });
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
      const randomNum = Math.floor(Math.random() * (max - min) + min);
      const getme = liveStudents[randomNum].id;
      this.sharkAttack(getme);
      console.warn('got excute');
      message = '';
      this.updateMessage(message);
    }
  }

  render() {
    const { liveStudents, dearlyBeloved, message } = this.state;
    return (
      <div className="App">
        <h1>
          <span>SHARK ATTACK</span>
        </h1>
        <span className="app_logo"><p className="app_logo1">. .</p></span>
        {/* <img src="https://thumbs.gfycat.com/AgonizingDecisiveBullmastiff-size_restricted.gif" alt="back" /> */}
        <i class="fas fa-icicles shapFont"><button className="centered btn" onClick={this.reset1Event}>Home</button></i>
        <a onClick={this.sharkAttackEvent} className="app_attackBtn" href='#link'>
          <span className="attach_span"></span>
          <span className="attach_span"></span>
          <span className="attach_span"></span>
          <span className="attach_span"></span>
          Feed The Starving Shark</a>
        <h4 className="app_message">{ message }</h4>
        <div className="container d-flex flex-wrap">
          <div className="col-6">
            <SharkTank liveStudents={liveStudents} sharkAttack={this.sharkAttack}/>
          </div>
          <div className="col-6">
            <Graveyards dearlyBeloved={dearlyBeloved}/>
          </div>
        </div>
        <div className="box"></div>
      </div>
    );
  }
}

export default App;
