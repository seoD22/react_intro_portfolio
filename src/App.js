import 'bootstrap/dist/css/bootstrap.css'
import Navi from './component/Navi'
import MainBanner from './component/MainBanner'
import Hamburger from './component/Hamburger'
import Portfolio from './component/Portfolio'
import About from './component/About'
import Preinterview from './component/Preinterview'
import Contact from './component/Contact'
import Etc from './component/Etc'
import Footer from './component/Footer'
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
      <Contact></Contact>
      <Etc></Etc>
      <Footer></Footer>
    </div>
  );
}

export default App;
