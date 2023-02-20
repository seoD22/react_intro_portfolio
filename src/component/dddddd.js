////import interviewDBlink from '../json/preinterview.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Preinterview = (props) => {
  const prebtn_pc = document.getElementsByClassName('pre_button_pc')
  // const [faqlist, setfaqlist] = useState(null); // 비동기통신 useState의 null인 이유
  const [axiosVar, updateVar] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    
   //// const interviewjson = interviewDBlink[props.objnm]; 

    const fetchFaq = async () => {
      try {
         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      updateVar(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        '//seod.cafe24app.com/notice?type=list'
      );
      console.log(response)
      updateVar( response.data );      
      } catch (e) {
        setError(e);
      }
      setLoading(false); //응답받고 랜더링
    }

    useEffect(() => {
      fetchFaq(); //마운팅끝나고 바로 한번만 요청실행
    }, []);
    
  
    return(
      <div id='preinterview' className='container_left'>
        {   loading && <div>로딩중..</div> }
        { error &&  <div>에러가 발생했습니다</div>}
        {
          loading === false && <div>
            <h2>Preinterview</h2>
            {
              axiosVar && axiosVar.map((item, index)=>{
                return(
                  <div key={'answer'+index} className='pre_answer_pc'>
                    {item.content}
                  </div>
                )
              })
            }
            <div className='pre_pc'>
              <div className='pre_btns_pc'>
                {
                  axiosVar && axiosVar.map((it, idx)=>{
                    return(
                      <div key={'prebtns'+idx} className='pre_button_pc' onClick={(e)=>{
                          axiosVar.forEach((v, i)=>{
                            if( i === idx){
                              prebtn_pc.item(i).classList = 'pre_button_pc click'
                            }else{
                              prebtn_pc.item(i).classList = 'pre_button_pc'
                            }
                          })
                          // updateVar(it.func)
                        }
                      }>
                        <button name={'btn'+it.func}>
                          {it.subject}
                        </button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }

  export default Preinterview;