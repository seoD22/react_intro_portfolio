import {useEffect} from 'react';

function Preinterview(props) {
  const btn = document.querySelectorAll('.pre_button')
  var btn_pc = document.querySelectorAll('.pre_button_pc')
  useEffect(()=>{
    btn.forEach(function(el){
      el.addEventListener('click', function(){
        el.classList.toggle('click')
      })
    })
  }, [])
  
  for(var i = 0; i < btn_pc.length; i++){
    btn_pc[i].onclick = function(){
      var el = btn_pc[0]
      while(el){
        if(el.tagName === "DIV"){
          // 클래스 삭제
          el.classList.remove('click')
        }
        el = el.nextSibling;
        
      } 

      this.classList.add('click')
    }
  }

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
          <div className='pre_button_pc click'>
            <p>첫번째 질문</p>
          </div>
          <div className='pre_button_pc'>
            <p>두번째 질문</p>
          </div>
          <div className='pre_button_pc'>
            <p>세번째 질문</p>
          </div>
          <div className='pre_button_pc'>
            <p>네번째 질문</p>
          </div>
        </div>
        <div className='pre_answer_pc'>
        </div>
      </div>
    </div>
  );
}

export default Preinterview;