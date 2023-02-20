import { useEffect, useState } from 'react';
import axios from 'axios';

function Pre_mobile(props) {
  const [faqlist, setfaqlist] = useState(null); // 비동기통신 useState의 null인 이유

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    
   //// const interviewjson = interviewDBlink[props.objnm]; 

    const fetchFaq = async () => {
      try {
         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setfaqlist(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        '//seod.cafe24app.com/notice?type=list'
      );
      setfaqlist( response.data );
      

      } catch (e) {
        setError(e);
      }
      setLoading(false); //응답받고 랜더링
      
    }


    useEffect(() => {
      fetchFaq(); //마우팅끝나고 바로 한번만 요청실행
    }, []);

  return (
    <div className='pre_button_mobile'>
      {   loading && <div>로딩중..</div> }
      { error &&  <div>에러가 발생했습니다</div>}
      {
        loading === false && <ul> 
          {
            faqlist && faqlist.map(function(item, index){
              console.log(faqlist)
              return(
                <li key={'pre_mobile'+index}>
                  <button className='pre_button ms-4 me-4' onClick={(e)=>{
                    faqlist.forEach((it, idx)=>{
                      if( idx === index ){
                        document.getElementsByClassName('pre_button').item(idx).classList = 'pre_button click'
                      }else{
                        document.getElementsByClassName('pre_button').item(idx).classList = 'pre_button'
                      }
                    })
                  }}>
                    {item.subject}
                  </button>
                  <div className='pre_answer ms-4 me-4'>
                    {item.content}
                  </div>
                </li>
              )
            })
          }
        </ul>
      }
    </div>
  );
}

export default Pre_mobile;