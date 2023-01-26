import React from 'react';
import { NavItem } from 'react-bootstrap';
import portfolioDB from '../json/portfolio.json'

function Portfolioin(props) {
  return (
    <div id={props.portfolioId} className="py-5">
      <h2 className='text-uppercase text-center'>{portfolioDB[props.portfolioId].title}
      </h2>
      <p>
        {portfolioDB[props.portfolioId].title}
      </p>
      <ul>
        {
          portfolioDB[props.portfolioId].swlist.map((v, i)=>{
            return v.thumb.map((vv, ii)=>{
              return <li key={'thumb'+ii} className={props.portfolioId+i+"_"+ii}>{vv}</li>
            }) 
          })
        }
      </ul>
    </div>
  );
}

export default Portfolioin;