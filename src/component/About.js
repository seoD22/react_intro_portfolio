import { useEffect } from 'react';
import skillDB from "../json/skill.json";

function About(props) {
  const skillDBfile = skillDB.skilldb

  useEffect(() => {
    document.querySelectorAll('.skill_value').forEach(function (el, i) {
      document.querySelectorAll('.skill_per')[i].style.width = el.textContent;
    })
  }, [])

  return (
    <div id='about' className='my-5 contentBox col-lg-9 mx-lg-auto'>
      <h2 className='mb-5'>About me</h2>
      <div className='align-items-start'>
        <img className='about_img col-8 col-lg-3 mt-lg-5 me-lg-5' src="/img/ysh.png" alt="" />
        <div className='about_text my-5 my-lg-0 col px-5'>
          <strong>
            개인정보
          </strong>
          <p>
            윤서희(94. 10. 13)
          </p>
          <p>
            경기도 성남시 수정구 거주
          </p>
          <br></br>
          <p>
            010-5480-5732
          </p>
          <p>
            cobbt258@naver.com
          </p>
          <br></br>
          <strong>
            학력/경력
          </strong>
          <p>
            신구대학교 졸업(미디어콘텐츠학과)
          </p>
          <p>
            솔랩컴퍼니 2년 근무(언론 홍보 AE)
          </p>
          <p>
            PWA 프론트엔드 6개월 과정 수료
          </p>
          <p>
            디자인위브 프리랜서
          </p>
          <br></br>
          <strong>
            자격증
          </strong>
          <p>
            GTQ 1급(2023년 1월 13일 취득)
          </p>
          <p>
            웹기능사 자격증(필기)
          </p>
        </div>
        <ul className='skill_wrapper mx-auto col-10 col-lg-4'>
          {
            skillDBfile.map((it, idx) => {
              return (
                <li key={'skill' + idx} className='skillbar d-flex align-items-center'><img src={it.imgsrc} alt="" /><div><p className='skill_value'>{it.percent}</p><div className='bar rounded-pill'><div className='skill_per rounded-pill'></div></div></div></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default About;