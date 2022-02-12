import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
