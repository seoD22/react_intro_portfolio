import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'

function App() {
  const [burgerToggle, burgerSet] = useState(true)

  return (
    <div className="burger">
      <button className='burger_btn position-absolute' onClick={ () => { burgerSet(!burgerToggle) } }>
        <img src="./img/common/icon/ham_open.png" alt="" />
      </button>
      <div className={ burgerToggle ? "show burger_list" : "burger_list" }>
        얍얍얍
      </div>
    </div>
    
  );
}

export default App;
