import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as roomAPI from "../../utilities/rooms-api.js"; // Importing The Room API
import * as reviewAPI from "../../utilities/review-api.js";
import ShowReview from "../ShowReview/showreview.jsx";
import { Link } from "react-router-dom";


export default function ShowRoom({ user }) {
  let { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    message: "",
    room_id: roomId,
    user_id: user._id,
  });
    
   const [reviews,setReviews] = useState([])
   


  useEffect(() => {
    async function getRoom() {
      const response = await roomAPI.getById(roomId);
      setRoom(response);
    }

    getRoom();

    async function getReviews() {
        const response = await reviewAPI.getAll(roomId);
        setReviews(response);
      }
  
      getReviews();
  }, []);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e){
    e.preventDefault()
    const response = await reviewAPI.addReview(formData)
    console.log(response)

  }
  return (
    <div>
      {roomId}
      <form onSubmit={handleSubmit}>
        <p>Add A Review</p>
        <input type="text" name="message" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      {reviews.map((review) =>(
        <div>
           <Link to ={`/review/${review._id}`}> <p>{review.message}</p> </Link>
        </div>
      )) }
    </div>
  );
}
