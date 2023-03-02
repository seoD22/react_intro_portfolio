import React, {useEffect, useState} from 'react'
import navicss from '../css/navi.module.css'
import { Link } from 'react-router-dom'
import ScrollSpy from 'react-scrollspy';
import naviDB from '../json/navi.json'


function Navi(props) {
  const naviDBfile = naviDB.naviDATA
  const naviSNSfile = naviDB.snsDATA

  return (
    <div id="hd" className="fixed-top">
      <header className='px-3 mt-3 px-lg-5 mt-lg-5'>
        <h1 className='text-start mb-3'>
          <a href='#main_banner' className='logo'>
          </a>
        </h1>
        <ScrollSpy className='navi_ul text-start mb-4' items={ ['portfolio', 'about', 'preinterview','contact','etc'] } currentClassName="active">
          {
            naviDBfile.map((item, index)=>{
              const myclass = item.d1.naviCls.join(" ");

              if(item.d1.naviType){
                return <li key={'navi'+index} className={myclass}><a href={item.d1.navihref}><span className='en'>{item.d1.naviText}</span><span className='kr'>{item.d1.naviText_kr}</span></a></li>
              }else{
                return <li key={'navi'+index} className={myclass}><Link href={item.d1.navihref}><span className='en'>{item.d1.naviText}</span><span className='kr'>{item.d1.naviText_kr}</span></Link></li>
              }
            })
          }
        </ScrollSpy>
        <ul className="sns text-start">
          {
            naviSNSfile.map((item, index)=>{
              return <li key={'sns'+index} className={item.d1.snsCls}>
                <a href={item.d1.snsLink} target={item.d1.snsTarget}><img className='img-fluid' src={item.d1.snsImg} alt="" /></a>
              </li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default Navi;
