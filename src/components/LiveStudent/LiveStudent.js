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
    /*
    const randomNum = Math.floor(Math.random() * Math.floor(20));
    const randomImg = [
      'https://lh5.googleusercontent.com/proxy/1Mz08TPyLE8G4_fophxDLkwxbcuSSEol5Vzr77KdXgHX7vRp36eaHk48O0ZUbCSq5xBYFpbrd6Gj9GHRwIsWmjhJhICRaCPS5ugOCbYGvfc6wbrPvsEjmlikphwBq1oLWw',
      'https://media0.giphy.com/media/41fVADWFuH310BFLvt/giphy.gif',
      'https://media0.giphy.com/media/41fVADWFuH310BFLvt/giphy.gif',
      'https://www.artiestick.com/summer/arg-shark-surfboard-bg-207x165-url.gif',
      // eslint-disable-next-line max-len
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5693b494-a609-44cb-95fd-36676632d1ee/daubuiq-e0acbdf6-76b4-4552-805b-51fc0abf9311.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
      .eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTY5M2I0OTQtYTYwOS00NGNiLTk1ZmQtMzY2NzY2MzJkMWVlXC9kYXVidWlxLWUwYWNiZGY2LTc2YjQtNDU1Mi04MDViLTUxZmMwYWJmOTMxMS
      5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ
      .hJsDQw6OBaQsmpOWpOkqRY86DTjrxq7yALcXZTZJMg4',
      // eslint-disable-next-line max-len
      'https://images.squarespace-cdn.com/content/v1/544ff970e4b0c2f7a273e9b6/1500276703791-A60MZGD8RY01NFUZHXWX
      /ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw
      -zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s
      _4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o
      /Floating_v2.gif',
      'https://www.artiestick.com/summer/arg-kid-in-pool-w-shark-bg-207x165-url.gif',
      'https://64.media.tumblr.com/50fa6b8c2619ae3e57a15cebbbd89c7f/tumblr_ntysrzcoFe1sjwwzso1_500.gif',
      'https://i.gifer.com/5zRi.gif',
      'https://i.pinimg.com/originals/b6/a7/43/b6a7439f6edba8558737f8ce58445334.gif',
      'https://thumbs.gfycat.com/ArcticKeyAfricanhornbill-size_restricted.gif',
      'https://thumbs.gfycat.com/LividCornyEmu-small.gif',
      'https://thumbs.gfycat.com/FabulousBlackChameleon-size_restricted.gif',
      'https://media1.tenor.com/images/315a9241bd12a7489a8a62155b5229d7/tenor.gif?itemid=10705069',
      'https://media1.tenor.com/images/55b1edbf3e460c5f96cf21fe5f52a927/tenor.gif?itemid=10705097',
      'https://media2.giphy.com/media/e7PQ0h3KI2l3326Yqm/giphy.gif',
      'https://media1.tenor.com/images/9b7843594559b45317e115f2160369fc/tenor.gif?itemid=12414877',
      'https://i.pinimg.com/originals/62/d2/13/62d213aa16288cee25d2d021f05a61c5.gif',
      'https://i.kinja-img.com/gawker-media/image/upload/t_original/z0te37ocxchjfkb1tzkl.gif',
      'https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/7afnlf8fabpx.gif',
    ];
    */
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

// https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700142/60248361-smiling-blue-shark-cartoon-mascot-character-with-sunglasses-surfing-and-waving-over-wave.jpg
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mNy1_7nxOthW_Wo-hLqXKkKdCWEhjqoAc8WbVnIlRHrGyMY&s
// https://media0.giphy.com/media/41fVADWFuH310BFLvt/giphy.gif
// https://thumbs.dreamstime.com/z/shark-attack-9832540.jpg
// https://i.pinimg.com/originals/63/1d/59/631d59775c1c9bb45fdfd9b1de415f4c.jpg
// eslint-disable-next-line max-len
// https://www.google.com/search?q=&tbm=isch&tbs=rimg:Ce5U6DX-SBDHImBtFiS6drH58DAg8mXVj6azXroCRrzE6IoQpkd_1rXqqXAYlAgZ9vc9gaG5CVSobb3SbFskUYGBXEEez-VEXN2xI0FX-6x9P_1dcYTXZ3yTpTBDKI0rYD4h7R2gAoChLZEKUqEgltFiS6drH58BHwxGEJuK7gbioSCTAg8mXVj6azEagGcDH9WQp-KhIJXroCRrzE6IoRkuZUdI6LAo8qEgkQpkd_1rXqqXBGrVxSRMaH2RyoSCQYlAgZ9vc9gEXa0RcC888CdKhIJaG5CVSobb3QRu-9Tr6SvR9MqEgmbFskUYGBXEBGiKgMe5MgctCoSCUez-VEXN2xIETi2gIC2XjMhKhIJ0FX-6x9P_1dcR4qKW2ZDKHJwqEgkYTXZ3yTpTBBHg2o46taAR_1CoSCTKI0rYD4h7REXlBeV0IgenaKhIJ2gAoChLZEKURib7lqg5tJiRhwSwf0BuS-Xs&tbo=u&sa=X&ved=2ahUKEwjf1aTSpJjrAhVCh-AKHfPtDfMQuIIBegQIARA6&biw=1920&bih=937&dpr=1
// https://www.artiestick.com/summer/arg-kid-in-pool-w-shark-bg-207x165-url.gif
// search on google animation person inside swimming pool gif for cards
// animation person inside swimming pool gif for cards
// take the random image <img className="card-img-top" src={ `${randomImg[randomNum]}` } alt="shark" />
