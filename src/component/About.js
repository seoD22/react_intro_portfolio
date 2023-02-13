import {useEffect} from 'react';
import skillDB from "../json/skill.json";

function About(props) {
  const skillDBfile = skillDB.skilldb

  useEffect(() => {
    document.querySelectorAll('.skill_value').forEach(function (el, i) {
      document.querySelectorAll('.skill_per')[i].style.width = el.textContent;
    })
  }, [])

  return (
    <div id='about' className='container_left'>
      <h2>About me</h2>
      <div>
      <img src="/img/ysh.png" alt="" />
      <div className='about_text'>
        <p>
          윤서희(94. 10. 13)
        </p>
        <br></br>
        <p>
          경기도 성남시 수정구 거주
        </p>
        <p>
          010-5480-5732
        </p>
        <p>
          cobbt258@naver.com
        </p>
        <br></br>
        <p>
          신구대학교 졸업(미디어콘텐츠학과)
        </p>
        <p>
          솔랩컴퍼니 2년 근무(언론 홍보 AE)
        </p>
        <p>
          PWA 프론트엔드 6개월 과정 수료
        </p>
        <br></br>
        <p>
          웹기능사 자격증
        </p>
        <p>
          GTQ 1급
        </p>
      </div>
      <ul className='skill_wrapper'>
        {
          skillDBfile.map((it, idx)=>{
            return (
              <li className='skillbar d-flex align-items-center'><img src={it.imgsrc} alt="" /><div><p className='skill_value'>{it.percent}</p><div className='bar rounded-pill'><div className='skill_per rounded-pill'></div></div></div></li>
            )
          })
        }
      </ul>
      </div>
    </div>
  );
}

export default About;