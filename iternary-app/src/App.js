import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Overview from './Pages/Overview';
import History from './Pages/History';
import AddAdventure from './Pages/AddAdventure';
import AddPost from './Pages/AddPost';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/overview/:adventureID" element={<Overview />}/>
          <Route path="/history/:userID" element={<History />}/>
          <Route path="/add-adventure" element={<AddAdventure />}/>
          <Route path="/add-post/:adventureID" element={<AddPost />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
