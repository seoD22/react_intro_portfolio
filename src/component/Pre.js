import {useState, useEffect } from 'react';
import axios from 'axios';
import interviewDB from '../json/Preinterview.json'

function Pre(props) {
  const prebtn_pc = document.getElementsByClassName('pre_button_pc')
  const interDB = interviewDB.preinterview
  const [axiosVar, updateVar] = useState('A')

  useEffect(()=>{
    console.log(axiosVar)
  }, [axiosVar]);

  return (
    <div id='preinterview' className='container_left'>
      <h2>Preinterview</h2>
      <div className='pre_answer_pc'>
        {axiosVar}
      </div>
      <div className='pre_pc'>
        <div className='pre_btns_pc'>
          { interDB.map((it, idx)=>{
            return <div key={'prebtns'+idx} className='pre_button_pc' onClick={(e)=>{
              interDB.forEach((v, i)=>{
                if( i === idx ){
                  prebtn_pc.item(i).classList = 'pre_button_pc click';
                }else{
                  prebtn_pc.item(i).classList = 'pre_button_pc';
                }
              })
              // console.log(e.target.name)
              updateVar(it.value)
              // console.log(axiosVar)
            }}>
                <button name={it.value}>
                  {it.btnNm}
                </button>
              </div>
          })
          }
        </div>
      </div>
    </div>
  );
}

export default Pre;