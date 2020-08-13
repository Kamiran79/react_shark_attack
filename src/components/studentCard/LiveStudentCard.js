import React from 'react';

class LiveStudentCard extends React.Component {
  render() {
    const { liveStudent } = this.props;
    return (
      <div className="continer">
        <div class="row d-flex flex-wrap">
          <div class="card">
            <img class="card-img-top" src="https://www.artiestick.com/summer/arg-kid-in-pool-w-shark-bg-207x165-url.gif" alt="shark" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <h4> here the live student cards </h4>
        { liveStudent.firstName }

      </div>
    );
  }
}

export default LiveStudentCard;
