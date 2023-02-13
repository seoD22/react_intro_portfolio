import {useEffect} from 'react';

function Preinterview(props) {
  const btn = document.querySelectorAll('.pre_button')
  useEffect(()=>{
    btn.forEach(function(el){
      el.addEventListener('click', function(){
        el.classList.toggle('click')
      })
    })
  }, [])
  
  return (
    <div id='preinterview' className='container_left'>
      <h2>Preinterview</h2>
      <div className='pre_button_mobile'>
        <div className='pre_button ms-4 me-4 click'>
          첫번째 질문~~~~입니다.
        </div>
        <div className='pre_answer ms-4 me-4'>
          답변!
        </div>
        <div className='pre_button ms-4 me-4'>
          두번째 질문~~~~입니다.
        </div>
        <div className='pre_answer ms-4 me-4'>
          답변!
        </div>
        <div className='pre_button ms-4 me-4'>
          세번째 질문~~~~입니다.
        </div>
        <div className='pre_answer ms-4 me-4'>
          답변!
        </div>
        <div className='pre_button ms-4 me-4'>
          네번째 질문~~~~입니다.
        </div>
        <div className='pre_answer ms-4 me-4'>
          답변!
        </div>
      </div>
      <div className='pre_pc'>
        <div className='pre_btns_pc'>
          <div className='pre_button_pc'>
            첫번째 질문
          </div>
          <div className='pre_button_pc'>
            두번째 질문
          </div>
          <div className='pre_button_pc'>
            세번째 질문
          </div>
          <div className='pre_button_pc'>
            네번째 질문
          </div>
        </div>
        <div className='pre_answer_pc'>
        </div>
      </div>
    </div>
  );
}

export default Preinterview;