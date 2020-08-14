import React from 'react';
import LiveStudentCard from '../studentCard/LiveStudentCard';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  render() {
    const { liveStudents } = this.props;

    const liveStudentCard = liveStudents.map((liveStudent) => (
      <LiveStudentCard key={liveStudent.id} liveStudent={liveStudent}/>));

    return (
      <div>
        <h2>Get your student still live</h2>
        <div className="container">
            <div className="row d-flex flex-wrap">
              { liveStudentCard }
            </div>
        </div>
      </div>
    );
  }
}

export default LiveStudent;

// { students.map((student) => (<h6>{student.firstName} {student.lastName}</h6>)) }
