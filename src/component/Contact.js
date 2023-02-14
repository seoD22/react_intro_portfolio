import * as React from 'react';
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";

function Contact(props) {
  // const areaSelectEl = document.querySelectorAll('form .js-selectDiv')[0]
  // const areainput = document.getElementsByName('area')[0]
  // //console.log(areaSelectEl, typeof areaSelectEl)
  // //console.log(areainput, typeof areainput)
  // areaSelectEl.addEventListener('click', function (e) {
  //   this.classList.toggle('on')
  // })
  // var areali = document.querySelectorAll('form .js-selectDiv li')
  // areali.forEach(function (el, index) {
  //   //console.log(typeof a,b)
  //   el.addEventListener('click', function () {
  //     //console.log(this, typeof this)
  //     var _thisText = this.innerHTML
  //     //console.log(_thisText)
  //     document.querySelector('form .js-selectDiv p').innerHTML = _thisText
  //     areainput.value = _thisText
  //     //console.log(areainput.value)
  //   })
  // })

  // //팝업창 띄우기
  // document.querySelector('#agree + label a').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   document.body.classList.add('show')
  // })

  // //팝업창 닫기
  // document.querySelector('#popagree a').addEventListener('click', function () {
  //   document.body.classList.remove('show')
  // })

  //체크박스 인지
  // $('form').on('click submit', '[type="submit"]', function(){
  //   //.prop("checked")
  //   //.is(":checked")
  //   if(!($("#agree").is(":checked"))){
  //     alert('개인정보정책에 동의 부탁드립니다😎')
  //     return false; //submit은 넘어갈지 말지를 true와 false로 표시 >> false는 페이지가 안 넘어감
  //   }    
  // })

  return (
    <div id='contact_section' className='container_left'>
      <h2>Contact</h2>
      <div className='form container p-0'>
        <form action="데이터를 저장할 서버페이지경로" method="post" name="contact" id="contact">
          <input type="hidden" name='area' />
          <ul className='row'>
            <li class="col-md-10 py-3 pr-0">
              <div class="line">
                <p class="formindent m-0 translate_1">
                  <label for="companyNm" class="fw-5 bg-white px-2 m-0">회사명</label>
                  <input type="text" name='companyNm' className='d-block pl-2 w-100' placeholder="회사명을 입력해주세요." onchange="bgcolor_yellow()" />
                </p>
              </div>
            </li>
            <li class="fix_form col-md-2 pr-0 py-3 pl-md-2">
              <div class="location line">
                <p class="formindent m-0 translate_2">
                  <label for="companyNm" class="fw-5 bg-white px-2 m-0">회사 위치</label>
                </p>
                <div class="js-selectDiv overflow-hidden position-relative">
                  <p class="bg_arrow d-flex justify-content-between align-items-center m-0"><span>지역선택</span></p>
                  <div>
                    <ul class="position-absolute bg-white border">
                      <li>잠실</li>
                      <li>강남</li>
                      <li>정자</li>
                      <li>판교</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="companyNm col-md-6 py-3 pr-0">
              <div class="line">
                <p class="formindent m-0 translate_2">
                  <label for="companyNm" class="bg-white px-2 m-0 fw-5">채용 직무</label>
                  <div class="font-sm">
                    <label class="m-0"><input type="checkbox" name="pront-end" value="pront-end" class="d-none" /><i class="bi bi-record-circle-fill"></i> 프론트엔드</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="publisher" value="publisher" class="d-none" /><i class="bi bi-record-circle-fill"></i> 퍼블리셔</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="planer" value="planer" class="d-none" /><i class="bi bi-record-circle-fill"></i> 기획자</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="designer" value="designer" class="d-none" /><i class="bi bi-record-circle-fill"></i> 디자이너</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="etc" value="etc" class="d-none" /><i class="bi bi-record-circle-fill"></i> 기타 <input type="text" class="bg-light" placeholder="입력뀨" /></label>
                  </div>
                </p>
              </div>
            </li>
            <li class="companyNm col-md-6 py-3 pr-0">
              <div class="line">
                <p class="formindent m-0 translate_2">
                  <label for="companyNm" class="fw-5 bg-white px-2 m-0">주력 언어</label>
                  <div class="font-sm">
                    <label class="m-0"><input type="checkbox" name="pront-end" value="pront-end" class="d-none" /><i class="bi bi-record-circle-fill"></i> 리액트</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="publisher" value="publisher" class="d-none" /><i class="bi bi-record-circle-fill"></i> 노드</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="planer" value="planer" class="d-none" /><i class="bi bi-record-circle-fill"></i> php</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="designer" value="designer" class="d-none" /><i class="bi bi-record-circle-fill"></i> JS</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="designer" value="designer" class="d-none" /><i class="bi bi-record-circle-fill"></i> 제이쿼리</label>
                    <label class="m-0 ml-2"><input type="checkbox" name="etc" value="etc" class="d-none" /><i class="bi bi-record-circle-fill"></i> 기타 <input type="text" class="bg-light" placeholder="입력뀨" /></label>
                  </div>
                </p>
              </div>
            </li>
            <li class="col-md-2 py-3 pr-0">
              <div class="line">
                <p class="formindent m-0 translate_1">
                  <label for="companyNm" class="fw-5 bg-white px-2 m-0">담당자명</label>
                  <input type="text" name="companyNm" class="d-block pl-2 w-100" />
                </p>
              </div>
            </li>
            <li class="col-md-10 py-3 pr-0">
              <div class="line">
                <p class="formindent m-0 translate_1">
                  <label for="companyNm" class="fw-5 bg-white px-2 m-0">연락처</label>
                  <input type="text" name="companyNm" class="d-block pl-2 w-100" placeholder="담당자님께 연락할 수 있는 이메일 혹은 카톡아이디를 남겨주세요." />
                </p>
              </div>
            </li>
            <li class="col-6 col-md-2 py-3 pr-0">
              <div class="line meeting">
                <p class="formindent m-0 translate_1">
                  <label for="comDate" class="fw-5 bg-white px-2 m-0">면접 날짜</label>
                  <input type="date" name="comDate" class="d-block pl-1 w-100" />
                </p>
              </div>
            </li>
            <li class="col-6 col-md-2 py-3 pr-0">
              <div class="line meeting">
                <p class="formindent m-0 translate_1">
                  <label for="comTime" class="fw-5 bg-white px-2 m-0">면접 시간</label>
                  <input type="time" name="comTime" class="d-block pl-1 w-100" />
                </p>
              </div>
            </li>
            <li class="d-none d-md-block">
              <span class="ml-3">* 남기고 싶은 말란에 추가로 남기셔도 괜찮습니다.</span>
            </li>
            <li id="message" class="col-md-12 py-3 pr-0">
              <div class="line">
                <p class="formindent m-0">
                  <div class="formindent">
                    <label for="" class="fw-5 bg-white px-2 m-0">남기고 싶은 말</label>
                  </div>
                  <div>
                    <textarea class="d-block w-100 pl-4" placeholder="자유롭게 작성 부탁드립니다."></textarea>
                  </div>
                </p>
              </div>
            </li>
          </ul>
          <p>
            <input type="checkbox" id="agree" class="d-none" />
            <label for="agree" class="d-flex align-items-center"><i class="bi bi-record-circle-fill"></i>개인정보수집이용동의
              <a href="#popagree" class="m-2">자세히보기</a>
            </label>
          </p>
          <p id="send" class="d-flex align-items-center">
            <input type="submit" value="Send message" />
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </p>
        </form>
      </div>
      <div id='popagree' className='position-absolute bg-white border p-3'>
        <div className='position-relative'>
          <a href="#none">
            <i className='bi bi-x-square-fill'></i>
          </a>
        </div>
        <div className='popcontent'>
          iframe으로 약관 가져오기
        </div>
      </div>
    </div>
  );
}

export default Contact;
