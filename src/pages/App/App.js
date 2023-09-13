import AuthPage from '../AuthPage/AuthPage.jsx'; 
import { useEffect, useState } from 'react';
import * as roomAPI from '../../utilities/rooms-api.js'; // Importing The Room API 
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Review from '../../components/Review/Review.jsx';
import Booking from '../../components/Booking/BookingLineItem.jsx';
import LineItem from '../../components/Booking/BookingLineItem.jsx';
import Home from '../../components/Home/Home.jsx';
import RoomList from '../../components/Room/RoomList.jsx';
import ShowRoom from '../ShowRoom/showroom.jsx';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [bookingData, setBookingData] = useState([]);
  const [roomList,setRoomList] = useState([]); // Create State #1 

  useEffect(() => {  // Creating A Use Effect Allows You Too Take Action UseEffect Happen As Soon Your Page Loads 
    // async function fetchBookingData() {
    //   try {
        
    //     const response = await fetch('/api/bookings'); 
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }

    //     const data = await response.json();
    //     setBookingData(data); // Set the booking data in state
    //   } catch (error) {
    //     console.error('Error fetching booking data:', error);
    //   }
    // }

    
    
    // fetchBookingData(); // Call the fetchBookingData function when the component mounts
   
    async function getRoom() {  // API to Get Room (Basic API Call To Get Room )
      const response = await roomAPI.getAll(); //  This is A API Call This Allows Me To Get My Data 
     
      setRoomList(response); // Updating The State With The Response For Our Room List To Put Our Data In Our Location 
      
    }
    getRoom();  // Bowl Is The State / Use Effect Is Our Res / API Call Is The Chef / SetState Is The Chef Putting Your Food In The Bowl 

   

    
  }, []); // The empty dependency array ensures this effect runs once when the component mounts
  return (
    <main className="App">
      { user ?
          <>

  
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/booking/:bookingId" element={<Booking booking={bookingData} />} /> */}
              <Route path="/review/new" element={<Review />} />
              {/* <Route path="/room/new" element={<Room/>} /> */}
              <Route path="/room" element={<RoomList roomList = {roomList}/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/review" element={<Review/>} /> 
              <Route path="/:roomId" element={<ShowRoom user={user}setUser={setUser}/>} /> 
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )}