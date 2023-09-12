import AuthPage from '../AuthPage/AuthPage.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Review from '../../components/Review/Review';
import Room from '../../components/Room/Room';
import Booking from '../../components/Booking/Booking';


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
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
