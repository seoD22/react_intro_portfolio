import {useState, useEffect } from 'react';
import axios from 'axios';
// import interviewDB from '../json/Preinterview.json'


const Pre = (props) => {
  const prebtn_pc = document.getElementsByClassName('pre_button_pc')
  // const interDB = interviewDB.preinterview
  const [axiosVar, updateVar] = useState('A')

  // const [faqlist, setfaqlist] = useState(null); // 비동기통신 useState의 null인 이유

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    
   //// const interviewjson = interviewDBlink[props.objnm]; 

    const fetchaxios = async () => {
      try {
         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      updateVar('A');
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        '//seod.cafe24app.com/notice?type=list'
      );
      updateVar( response.data );
      

      } catch (e) {
        setError(e);
      }
      setLoading(false); //응답받고 랜더링
      
    }


    useEffect(() => {
      fetchaxios(); //마우팅끝나고 바로 한번만 요청실행
    }, [axiosVar]);
    
  
  
    return(
      <div id='preinterview' className='container_left'>
        <h2>Preinterview</h2>
          {   loading && <div>로딩중..</div> }
          { error &&  <div>에러가 발생했습니다</div>}
          {
            loading === false && <div>
              <div className='pre_answer_pc'>
                {axiosVar && axiosVar}
              </div>
              <div className='pre_pc'>
                <div className='pre_btns_pc'>
                  { axiosVar && axiosVar.map((it, idx)=>{
                    return <div key={'prebtns'+idx} className='pre_button_pc' onClick={(e)=>{
                      axiosVar && axiosVar.forEach((v, i)=>{
                        if( i === idx ){
                          prebtn_pc.item(i).classList = 'pre_button_pc click';
                        }else{
                          prebtn_pc.item(i).classList = 'pre_button_pc';
                        }
                      })
                      // console.log(e.target.name)
                      updateVar(it.content)
                      // console.log(axiosVar)
                    }}>
                        <button name={it.content}>
                          {it.subject}
                        </button>
                      </div>
                  })
                  }
                </div>
              </div>
            </div>
          }
      </div>
    )
  }

  export default Pre;