import React from 'react';

class LiveStudent extends React.Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        <h2>Get your student still live</h2>
        { students.map((student) => (<h6>{student.firstName} {student.lastName}</h6>)) }
      </div>
    );
  }
}

export default LiveStudent;
