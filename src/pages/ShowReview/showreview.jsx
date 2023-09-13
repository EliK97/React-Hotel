import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as roomAPI from "../../utilities/rooms-api.js"; // Importing The Room API
import * as reviewAPI from "../../utilities/review-api.js";

export default function ShowReview({ user }) {
  let { reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [formData, setFormData] = useState({
    message: "",
  });

  useEffect(() => {
    async function getReview() {
      const response = await reviewAPI.getById(reviewId);
      setReview(response);
    }

    getReview();

    // async function getReviews() {
    //     const response = await reviewAPI.getAll(roomId);
    //     setReviews(response);
    //   }

    //   getReviews();
  }, []);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await reviewAPI.update(formData, review._id);
    console.log(response);
  }
  async function deleteReview(e) {
    e.preventDefault()
    const response = await reviewAPI.deleteReview(review._id)
    console.log(response)
  }
  return (
    <div>
      <h1> {review ? review.message : ""} </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" onChange={handleChange} />
        <button type="submit">Update Review</button>
      </form>
      <button onClick={deleteReview}>Delete</button>
    </div>
  );
}
