import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Overview from './Pages/Overview';
import History from './Pages/History';
import AddAdventure from './Pages/AddAdventure';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/overview" element={<Overview />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/add-adventure" element={<AddAdventure />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
