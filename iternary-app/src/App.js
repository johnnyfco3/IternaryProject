import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Overview from './Pages/Overview';
import History from './Pages/History';
import AddAdventure from './Pages/AddAdventure';
import AddPost from './Pages/AddPost';
import Friends from './Pages/Friends';
import NotFound from './Pages/NotFound';
import { useState } from 'react';
import Upcoming from './Pages/Upcoming';
import Current from './Pages/Current'
import Past from './Pages/Past'


function App() {

  const [users, setUsers] = useState([
    { 
        id: 1,
        firstName: "Johnny", 
        lastName: "Tejada", 
        birthday: "07-03-2000", 
        email: "example@gmail.com", 
        password: "12345", 
        quote: "Let's make today a memorable one!"
    },
    { 
        id: 2,
        firstName: "John", 
        lastName: "Smith", 
        birthday: "05-10-1999", 
        email: "example1@gmail.com", 
        password: "123456", 
        quote: "Hey there, lets travel together!!"
    },
    { 
      id: 3,
      firstName: "Michael", 
      lastName: "Jordan", 
      birthday: "08-20-1969", 
      email: "example2@gmail.com", 
      password: "1234", 
      quote: "Make the world a better place!"
  },
  ])

  const [friends, setFriends] = useState([
    {
      id: 1,
      userID: 1,
      friends: ["example1@gmail.com"]
    },
    {
      id: 2,
      userID: 2,
      friends: ["example@gmail.com"]
    }
  ])

  const [adventures, setAdventures] = useState([
    { 
        id: 1, 
        country: "New York", 
        city: "New York City", 
        startD: "2022-06-11", 
        endD: "2022-07-03", 
        background: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
        link: "https://goo.gl/maps/Dsd9XgPXUDoFBR9F8", 
        current: true,
        userID: 1 
    },
    { 
        id: 2, 
        country: "Australia", 
        city: "Sydney", 
        startD: "2021-02-20", 
        endD: "2021-03-03", 
        background: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
        description: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbour front Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.",
        link: "https://goo.gl/maps/qc9N74ZiEbnoL8mVA",
        current: false,
        userID: 1  
    },
    { 
        id: 3, 
        country: "Italy", 
        city: "Venice", 
        startD: "2022-02-25", 
        endD: "2022-03-05", 
        background: "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
        description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
        link: "https://goo.gl/maps/jdAxNDCYgBXoLdY69",
        current: false,
        userID: 1 
    },
    { 
        id: 4, 
        country: "Europe", 
        city: "France", 
        startD: "2022-02-26", 
        endD: "2022-02-26", 
        background: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
        link: "https://goo.gl/maps/Y6z271kWarFVRdG17",
        current: true,
        userID: 2  
    }
  ])

  const [posts, setPosts] = useState([
    { name: "World Trade Center", img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", adventureID: 1 },
    { name: "Little Island", img: "https://images.unsplash.com/photo-1622491088758-364f7e4908fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", adventureID: 1 },
    { name: "The Vessel", img: "https://images.unsplash.com/photo-1559613527-817fdce54129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", adventureID: 1 },
    { name: "Time Square", img: "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", adventureID: 1 },
    { name: "Central Park", img: "https://images.unsplash.com/photo-1558385953-d50e6afd94c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", adventureID: 1 },
    { name: "Rialto Bridge", img: "https://images.unsplash.com/photo-1562967967-edb2915098dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlhbHRvJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", adventureID: 3 },
    { name: "Doge's Palace", img: "https://images.unsplash.com/photo-1567012198973-b8843811d618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", adventureID: 3 },
    { name: "St. Marks Square", img: "https://images.unsplash.com/photo-1628106913234-9cdfddbf6b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", adventureID: 3 },
  ])

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
          <Route path="/login" element={<Login users={users}/>}/>
          <Route path="/register" element={<Register users={users}/>}/>
          <Route path="/overview/:adventureID" element={<Overview adventures={adventures} posts={posts}/>}/>
          <Route path="/history" element={<History users={users} adventures={adventures}/>}/>
          <Route path="/history/upcoming" element={<Upcoming date={date} adventures={adventures} users={users}/>}/>
          <Route path="/history/current" element={<Current date={date} adventures={adventures} users={users}/>}/>
          <Route path="/history/past" element={<Past date={date} adventures={adventures} users={users}/>}/>
          <Route path="/add-adventure" element={<AddAdventure adventures={adventures} setAdventures={setAdventures}/>}/>
          <Route path="/add-post/:adventureID" element={<AddPost posts={posts} setPosts={setPosts}/>}/>
          <Route path="/friends" element={<Friends friends={friends} users={users} setFriends={setFriends}/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
