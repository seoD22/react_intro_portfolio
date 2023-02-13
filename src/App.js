import 'bootstrap/dist/css/bootstrap.css'
import Navi from './component/Navi'
import MainBanner from './component/MainBanner'
import Hamburger from './component/Hamburger'
import Process from './component/Process'
import Portfolio from './component/Portfolio'
import About from './component/About'
import Preinterview from './component/Preinterview'
import Contact from './component/Contact'
import './App.css';
import './css/font.scss'
import './css/style.scss'

function App() {
  return (
    <div className="App">
      <Navi id="gnb"></Navi>
      <MainBanner></MainBanner>
      <Hamburger></Hamburger>
      <Portfolio dbobjkey="react"></Portfolio>
      <About></About>
      <Preinterview></Preinterview>
      {/* <Contact></Contact> */}
      <section style={{height:'100vh'}} id="contact"></section>
      <section style={{height:'100vh'}} id="etc"></section>
    </div>
  );
}

export default App;
