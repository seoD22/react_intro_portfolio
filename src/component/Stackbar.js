import React from 'react'
import { useEffect } from 'react';
import stackDBfile from '../json/stack.json'

function Stackbar(props) {
  useEffect(()=>{
    document.querySelectorAll('.value').forEach(function(el, i){
      el.parentElement.style.width = el.textContent;
    })
  },[])

  return (
    <div className='stack'>
      <div class="graphic">
        <div class="row">
          <div class="chart">
            {
              stackDBfile.stackDATA[props.num].st_1.map((item, index)=>{
                return <span className='block' title={item.stackTitle}><span className='value'>{item.stackPer}</span></span>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stackbar;