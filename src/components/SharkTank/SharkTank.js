import React from 'react';
import PropType from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropType.arrayOf(studentShape.studentShape),
    sharkAttack: PropType.func,
  }

  render() {
    const { liveStudents, sharkAttack } = this.props;

    const liveStudentCard = liveStudents.map((liveStudent) => (
      <LiveStudent key={liveStudent.id} liveStudent={liveStudent} sharkAttack={sharkAttack}/>));

    return (
      <div>
        <div className="container">
          <h2>Shark Tank</h2>
          <h6>Food Left: { liveStudentCard.length }</h6>
            <div className="row d-flex flex-wrap">
              { liveStudentCard }
            </div>
        </div>
      </div>
    );
  }
}

export default SharkTank;
