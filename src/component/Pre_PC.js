import { useEffect } from 'react';

function Pre_PC(props) {
  var btn_pc = document.querySelectorAll('.pre_button_pc')

  useEffect(()=>{
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
  }, [])

  return (
    <div>
      <div className='pre_answer_pc'>
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
      </div>
    </div>
  );
}

export default Pre_PC;