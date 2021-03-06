import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './service/protectedRoutes';
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
import AddFlight from './Pages/AddFlight';
import EditStops from './Pages/EditStops';
import EditFlights from './Pages/EditFlights';
import EditPosts from './Pages/EditPosts';
import EditUsers from './Pages/EditUser';

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
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />}/>
            <Route path="/overview/:adventureID/:email" element={<Overview />}/>
            <Route path="/history/:email" element={<History />}/>
            <Route path="/history/upcoming/:email" element={<Upcoming date={date} />}/>
            <Route path="/history/current/:email" element={<Current date={date} />}/>
            <Route path="/history/past/:email" element={<Past date={date} />}/>
            <Route path="/add-adventure" element={<AddAdventure />}/>
            <Route path="/add-post/:adventureID" element={<AddPost />}/>
            <Route path="/add-stop/:adventureID" element={<AddStop />}/>
            <Route path="/add-flight/:adventureID" element={<AddFlight />}/>
            <Route path="/edit-stops/:stopID" element={<EditStops />}/>
            <Route path="/edit-flights/:adventureID" element={<EditFlights />}/>
            <Route path="/edit-posts/:postID" element={<EditPosts />}/>
            <Route path="/edit-users" element={<EditUsers />}/>
            <Route path="/friends" element={<Friends />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
