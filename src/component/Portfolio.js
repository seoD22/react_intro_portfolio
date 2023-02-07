import React, { useState } from 'react';
import Portfolio_Swiper from './Portfolio_Swiper'
// import Portfolioin from './Portfolioin'

function Portfolio(props) {
  const [ worknm, worknmupdate] = useState(['PWA 리액트', 'reactid'])
  const btnupdate = (e) => {
    const newworknm = e.target.getAttribute('datasrc').split(',');
    worknmupdate(newworknm);
  }
  return (
    <div id="portfolio" className='container_left'>
      <Portfolio_Swiper></Portfolio_Swiper>
      {/* <div className="d-flex justify-content-center">
        <button onClick={btnupdate} datasrc={['PWA 리액트', 'reactid']}>PWA 리액트</button>
        <button onClick={btnupdate} datasrc={['EC 쇼핑몰', 'ecid']}>EC 쇼핑몰</button>
        <button onClick={btnupdate} datasrc={['CMS 그누보드', 'cmsid']}>CMS 그누보드</button>
        <button onClick={btnupdate} datasrc={['프레임워크 부트스트랩', 'figmaid']}>프레임워크 부트스트랩</button>
      </div> */}
      {/* <Portfolioin dbobjkey={worknm[0]} portfolioId={worknm[1]}></Portfolioin> */}
    </div>
  );
}

export default Portfolio;