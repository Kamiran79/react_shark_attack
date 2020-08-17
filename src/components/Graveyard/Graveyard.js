import React from 'react';
import PropType from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';

import studentShape from '../../helpers/propz/studentShape';

class Graveyards extends React.Component {
  static propTypes = {
    dearlyBeloved: PropType.arrayOf(studentShape.studentShape),
  }

  render() {
    const { dearlyBeloved } = this.props;

    const dearlyBelovedCard = dearlyBeloved.map((deadStudent) => (
      <GraveStone key={dearlyBeloved.id} dearlyBeloved={deadStudent} />
    ));
    return (
      <div>
        <div className="container">
          <h2>R.I.P</h2>
          <h6>dearly Beloved Total: { dearlyBeloved.length }</h6>
            <div className="row d-flex flex-wrap">
              { dearlyBelovedCard }
            </div>
        </div>
      </div>
    );
  }
}

export default Graveyards;
