import { useEffect, useState } from 'react';
import axios from 'axios';

function Pre_mobile(props) {
  const [axiosVar, updateVar] = useState(null)
  const [btnToggle, btnSet] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  
  return (
    <div id='preinterview' className='my-5'>
      <h2 className='mb-5'>Preinterview</h2>
      {   loading && <div>로딩중..</div> }
      { error &&  <div>에러가 발생했습니다</div>}
      {
        loading === false && <div>
            {
              axiosVar && axiosVar.map((v, i)=>{
                return(
                  <div key={'pre'+i} className='pre_button_mobile'>
                    <div className='pre_button ms-4 me-4' onClick={(e)=>{
                      axiosVar.forEach((vv, ii)=>{
                        if( i === ii){
                          document.getElementsByClassName('pre_button').item(ii).classList = 'pre_button ms-4 me-4 click'
                        }else{
                          document.getElementsByClassName('pre_button').item(ii).classList = 'pre_button ms-4 me-4'
                        }
                      })
                    }}>
                      {v.subject}
                    </div>
                    <div className='pre_answer ms-4 me-4'>
                      <p>
                        {v.des_1}<br></br><br></br>{v.des_2}<br></br><br></br>{v.des_3}
                      </p>
                    </div>
                  </div>
                )
              })
            }
        </div>
      }
    </div>
  );
}

export default Pre_mobile;