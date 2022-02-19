import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Overview from './Pages/Overview';
import History from './Pages/History';
import AddAdventure from './Pages/AddAdventure';
import AddPost from './Pages/AddPost';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/overview/:id" element={<Overview />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/add-adventure" element={<AddAdventure />}/>
          <Route path="/add-post/:id" element={<AddPost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
