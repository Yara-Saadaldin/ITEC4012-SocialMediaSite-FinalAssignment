import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from './components/Navbar';

import {HomePage} from './components/pages/HomePage'
import {ProfilePage} from './components/pages/ProfilePage'
import {LoginOrSignup} from './components/pages/Login-Signup'

function App() {
  return (
    <div className="App">
      <Router>
       
      <Navbar />

      <Routes>
        <Route exact path = "/" element={<HomePage/>}></Route>

      

        <Route path= "/login" element={<LoginOrSignup/>}></Route>
        
      </Routes>
    
      </Router>
    </div>
  );
}

export default App;
