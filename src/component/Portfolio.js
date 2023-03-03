import React, { useState } from 'react';
import Portfolio_Swiper from './Portfolio_Swiper'

function Portfolio(props) {
  const [ worknm, worknmupdate] = useState(['PWA 리액트', 'reactid'])
  const btnupdate = (e) => {
    const newworknm = e.target.getAttribute('datasrc').split(',');
    worknmupdate(newworknm);
  }
  return (
    <div id="portfolio" className='my-5'>
      <Portfolio_Swiper></Portfolio_Swiper>
    </div>
  );
}

export default Portfolio;