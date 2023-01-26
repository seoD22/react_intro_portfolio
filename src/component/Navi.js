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
      <header className='container'>
        <h1 className='text-start'>
          <Link to="/" className='logo'>
          </Link>
        </h1>
        <ScrollSpy className='navi_ul text-start mb-5'>
          {
            naviDBfile.map((item, index)=>{
              const myclass = item.d1.naviCls.join(" ");

              if(item.d1.naviType){
                return <li key={'navi'+index} className={myclass}><a href={item.d1.navihref}>{item.d1.naviText}</a></li>
              }else{
                return <li key={'navi'+index} className={myclass}><Link href={item.d1.navihref}>{item.d1.naviText}</Link></li>
              }
            })
          }
        </ScrollSpy>
        <ul className="sns text-start">
          {
            naviSNSfile.map((item, index)=>{
              return <li key={'sns'+index} className={item.d1.snsCls}>
                <a href={item.d1.snsLink} target={item.d1.snsTarget}><img src={item.d1.snsImg} alt="" /></a>
              </li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default Navi;
