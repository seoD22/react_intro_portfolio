import 'bootstrap/dist/css/bootstrap.css'
import Navi from './component/Navi'
import Hamburger from './component/Hamburger'
import Portfolio_Swiper from './component/Portfolio_Swiper'
import Process from './component/Process'
import './App.css';
import './css/font.css'
import './css/style.scss'

function App() {
  return (
    <div className="App">
      <Navi id="gnb"></Navi>
      <Hamburger></Hamburger>
      <Portfolio_Swiper></Portfolio_Swiper>
      <section style={{height:'100vh'}} id="dd"></section>
      <section style={{height:'100vh'}} id="portfolio"></section>
      <section style={{height:'100vh'}} id="about"></section>
      <Process id="process" title="개발자연혁"></Process>
      <section style={{height:'100vh'}} id="contact"></section>
      <section style={{height:'100vh'}} id="etc"></section>
    </div>
  );
}

export default App;
