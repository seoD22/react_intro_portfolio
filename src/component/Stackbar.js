import React from 'react'
import { useEffect } from 'react';
import stackDBfile from '../json/stack.json'

function Stackbar(props) {
  useEffect(() => {
    document.querySelectorAll('.value').forEach(function (el, i) {
      el.parentElement.style.width = el.textContent;
    })
  }, [])

  return (
    <div className='stack'>
      <div class="graphic">
        <div class="row mb-1">
          <div class="chart">
            {
              stackDBfile.stackDATA[props.num].st_1.map((item, index) => {
                return <span key={'stack'+index} className={`${item.stackTitle} block`} title={item.stackTitle}><span key={'stack'+index}className='value'>{item.stackPer}</span></span>
              })
            }
          </div>
        </div>
      </div>
      <div className='stack_text d-flex'>
        {
          stackDBfile.stackDATA[props.num].st_1.map((item, index) => {
            return <div key={'stack_text'+index} className='d-flex align-items-center me-1'><div key={'stack_text'+index} className={`${item.stackTitle} stack_circle`}></div><p>{item.stackTitle}</p></div>
          })
        }
      </div>
    </div>
  );
}

export default Stackbar;