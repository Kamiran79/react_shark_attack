import React from 'react';
import LiveStudentCard from '../studentCard/LiveStudentCard';

class LiveStudent extends React.Component {
  render() {
    const { students } = this.props;

    const liveStudentCard = students.map((liveStudent) => (
      <LiveStudentCard key={liveStudent.id} liveStudent={liveStudent}/>));

    return (
      <div>
        <h2>Get your student still live</h2>
        <div className="card-columns">
        { liveStudentCard }
        </div>
      </div>
    );
  }
}

export default LiveStudent;

// { students.map((student) => (<h6>{student.firstName} {student.lastName}</h6>)) }
