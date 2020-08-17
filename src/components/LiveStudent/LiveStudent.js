import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudent: studentShape.studentShape,
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    e.preventDefault();
    const { liveStudent, sharkAttack } = this.props;
    sharkAttack(liveStudent.id);
    console.warn('got excute');
  }

  render() {
    const { liveStudent } = this.props;

    return (
      <div className="card m-1 liveStudent">
        <p className="card-text">Still Live : <i className="far fa-smile"></i></p>
        <h5 className="card-title">{ liveStudent.firstName } { liveStudent.lastName}</h5>
      </div>
    );
  }
}

export default LiveStudent;

// this div working want to change it for css work:
/*
      <div className="card m-1 liveStudent">
        <img className="card-img-top" src={ liveStudent.imgUrl } alt="shark" />
        <div className="card-body">
          <h5 className="card-title">{ liveStudent.firstName } { liveStudent.lastName}</h5>
          <p className="card-text">Still Live : <i className="far fa-smile"></i></p>
        </div>
      </div>
*/

// save this random image for somthing else

// <img className="card-img-top" src={ `${randomImg[randomNum]}` } alt="shark" />
// { students.map((student) => (<h6>{student.firstName} {student.lastName}</h6>)) }

// my div working want try somthing else
/*
      <div className="card mx-4 mt-4 p-3 bg-dark text-light studentCard">
        <div className="thumbnail"><img src={liveStudent.imgUrl} alt="Student" /></div>
        <p>{liveStudent.firstName}<br/>{liveStudent.lastName}</p>
    </div>
*/
