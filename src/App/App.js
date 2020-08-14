import React from 'react';

import LiveStudent from '../components/LiveStudent/LiveStudent';

import studentsData from '../helpers/data/studentsData';

import './App.scss';

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
        <button className="btn btn-info">I am a button</button>
        <LiveStudent liveStudents={liveStudents}/>
      </div>
    );
  }
}

export default App;
