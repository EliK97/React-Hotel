import AuthPage from '../AuthPage/AuthPage.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Review from '../../components/Review/Review.jsx';
import Room from '../../components/Room/Room.jsx';
import Booking from '../../components/Booking/Booking.jsx';
import Home from '../../components/Home/Home.jsx';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/review/new" element={<Review />} />
              <Route path="/room/new" element={<Room/>} />
              <Route path="/booking/new" element={<Booking/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
