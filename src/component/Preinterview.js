import React from 'react';
// import Portfolioin from './Preinterviewin'

function Preinterview(props) {
  return (
    <div id='preinterview' className='container_left'>
      <h2>Preinterview</h2>
      <div className='pre_button_pc'>
        <div className='pre_button_1 ms-4 me-4 click'>
          첫번째 질문~~~~입니다.
        </div>
        <div className='pre_button_2 ms-4 me-4'>
          두번째 질문~~~~입니다.
        </div>
        <div className='pre_button_3 ms-4 me-4'>
          세번째 질문~~~~입니다.
        </div>
        <div className='pre_button_4 ms-4 me-4'>
          네번째 질문~~~~입니다.
        </div>
      </div>
    </div>
  );
}

export default Preinterview;