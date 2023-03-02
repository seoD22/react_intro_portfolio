import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'
import naviDB from '../json/navi.json'

function App() {
  const [burgerToggle, burgerSet] = useState(false)
  const naviDBfile = naviDB.naviDATA

  return (
    <div className="burger pt-3">
      <button className='burger_btn' onClick={ () => { burgerSet(!burgerToggle) } }>
        <img src={ burgerToggle ? "./img/common/icon/ham_close.png" : "./img/common/icon/ham_open.png" }alt="" />
      </button>
      <div className={ burgerToggle ? "show burger_list" : "burger_list" }>
        <div className='ul_list'>
          <div className='background_orange'></div>
          <ul>
            <div className='burger_profile'>
              <div className='circle circle_grey'>
              </div>
              <div className='circle circle_orange'>
              </div>
              <img src="./img/hamburger/profile.png" alt="" />
            </div>
            {
              naviDBfile.map((item, index)=>{

                if(item.d1.naviType){
                  return <li key={'navi'+index} className={'burger_navi_'+index}><span className={'burger_span'+index}></span><a href={item.d1.navihref}>{item.d1.naviText}</a></li>
                }else{
                  return <li key={'navi'+index}></li>
                }
              })
            }
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
