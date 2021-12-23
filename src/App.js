import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from './components/pages/HomePage'
import {ProfilePage} from './components/pages/ProfilePage'
import {LoginOrSignup} from './components/pages/Login-Signup'
import {CreateNewPostPage} from './components/pages/CreateNewPostPage'

function App() {
    return (
        <div className="App">
            <Router>

                {/* <Navbar /> */}

                <Routes>
                    <Route exact path="/" element={< HomePage />}></Route>

                    <Route path="/login" element={< LoginOrSignup />}></Route>

                    <Route path="/CreateNewPost" element={< CreateNewPostPage />}></Route>

                    <Route path="/me" element={< ProfilePage />}></Route>

                </Routes>

            </Router>
        </div>
    );
}

export default App;
