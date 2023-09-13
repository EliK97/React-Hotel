import React from 'react';
import './Home.css';
import './HomeCaro';
import UncontrolledExample from './HomeCaro';


function HomePage() {
  const featuredHotels = [
    {
      id: 1,
      name: ' Seven Stars ',
      description: 'A luxurious hotel with stunning views.',
    
    },
    {
      id: 2,
      name: 'Marriot',
      description: 'Experience comfort and relaxation.',
     
    },
    {
      id: 3,
      name: 'Ritz-Carlton',
      description: 'Stay in the heart of the city.',
    
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className='text-danger'> Welcome to Hotel Reviews</h1>
          <p>Discover and share your hotel experiences.</p>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        <div className="hotel-list">
          {/* {featuredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <button>View Details</button>
            </div>
          ))} */} <UncontrolledExample></UncontrolledExample> 
      
        </div>
      </section>
    </div>
  );
}





export default HomePage;
