////import interviewDBlink from '../json/preinterview.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pre_pc = (props) => {
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
      <div id='preinterview' className='mt-3 mb-5 contentBox col-lg-9 mx-lg-auto'>
        {   loading && <div>로딩중..</div> }
        { error &&  <div>에러가 발생했습니다</div>}
        {
          loading === false && <div>
            <h2 className='mt-5 mb-5 text-center'>Preinterview</h2>
            <div className='pre_pc visually-hidden'>
              <div className='pre_btns_pc'>
                {
                  axiosVar && axiosVar.map((it, idx)=>{
                    return(
                      <div key={'prebtns'+idx} >
                        <div className='pre_button_pc' onClick={(e)=>{
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
                        <div key={'answer'+idx} className='pre_answer_pc'>
                          <p>
                            {it.des_1}<br></br><br></br>{it.des_2}<br></br><br></br>{it.des_3}
                          </p>
                        </div>
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

  export default Pre_pc;