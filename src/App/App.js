import React from 'react';

import LiveStudent from '../components/LiveStudent/LiveStudent';

import studentsData from '../helpers/data/studentsData';

import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    this.setState({ students });
  }

  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
        <LiveStudent students={students}/>
      </div>
    );
  }
}

export default App;
