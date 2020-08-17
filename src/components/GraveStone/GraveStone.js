import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    dearlyBeloved: studentShape.studentShape,
  }

  render() {
    const { dearlyBeloved } = this.props;
    return (
      <div className="card m-1 deadStudentCard">
        <p className="card-text deadStudentText">R.I.P. : <i className="far fa-smile"></i></p>
        <h5 className="card-title deadStudentCardTitle">{ dearlyBeloved.firstName } { dearlyBeloved.lastName}</h5>
      </div>
    );
  }
}

export default GraveStone;
