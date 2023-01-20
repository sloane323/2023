import './App.css';
import { Routes, Route} from 'react-router-dom';
import Footer from './Componment/Footer';
import Main from './Pages/Main';
import PageSample from './Pages/PageSample';
import Page2 from './Pages/Page2';
import HeadMenu from './Componment/HeadMenu';
import Header from './Componment/Header';

function App() {
  return (
    <div className="App">
      <div>  <Header /> 
             <HeadMenu />  </div>

      <Routes> 
      <Route path='/' element={<Main />} /> 
      <Route path='/pages' element={<PageSample />} /> 
      <Route path='/page2' element={<Page2 />} /> 
      </Routes> 


      <div className='footer'>   <Footer /> </div>
    </div>
  );
}

export default App;
