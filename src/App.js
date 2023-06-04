import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import TotalCalls from './Phone/Total';
import RingTone from './Phone/Ring';
import Contact from './Phone/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <center>
          <nav style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
            <Link to='/'><abbr title='All calls'><img src='https://cdn-icons-png.flaticon.com/128/9089/9089739.png' alt='All calls' width={'20%'}/></abbr></Link>
            <Link to='/ring'><abbr title='MissedCalls'><img src='https://cdn-icons-png.flaticon.com/128/3735/3735471.png' alt='Missed Calls' width={'20%'}/></abbr></Link>
            <Link to='/contact'><abbr title='Contacts'><img src='https://cdn-icons-png.flaticon.com/128/720/720236.png' alt='Contacts' width={'20%'}/></abbr></Link>
          </nav>
         <br/>
          <Routes>
            <Route index element={<TotalCalls/>}/>
            <Route path='ring' element={<RingTone/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Routes>
          </center>
      </BrowserRouter>
    </div>
  );
}

export default App;
