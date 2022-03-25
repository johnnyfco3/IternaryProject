import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Overview from './Pages/Overview';
import History from './Pages/History';
import AddAdventure from './Pages/AddAdventure';
import AddPost from './Pages/AddPost';
import Friends from './Pages/Friends';
import NotFound from './Pages/NotFound';
import Upcoming from './Pages/Upcoming';
import Current from './Pages/Current';
import Past from './Pages/Past';
import Home from './Pages/Home';
import AddStop from './Pages/AddStop';


function App() {

  const today = new Date()
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
     
  const date = formatDate(today)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/overview/:adventureID/:id" element={<Overview />}/>
          <Route path="/history/:id" element={<History />}/>
          <Route path="/history/upcoming/:id" element={<Upcoming date={date} />}/>
          <Route path="/history/current/:id" element={<Current date={date} />}/>
          <Route path="/history/past/:id" element={<Past date={date} />}/>
          <Route path="/add-adventure" element={<AddAdventure />}/>
          <Route path="/add-post/:adventureID/:id" element={<AddPost />}/>
          <Route path="/add-stop/:adventureID" element={<AddStop />}/>
          <Route path="/friends" element={<Friends />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
