import React, { useState } from "react";

import { FaHeart } from "react-icons/fa";
import "./CarCard.css"; // Updated CSS


//const CarCard = () => {
  const images = [
    "https://www.hdwallpapers.in/download/adro_ford_mustang_coupe_car_white_background_4k_hd_cars-3840x2160.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmRrYq9qRdKRKqBk2PgSABdj_5J_O2zmokQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUUDOuRltTMeBaiIWk-gCS6iI5TxHqiSIRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5zuHssE4sRStzY0ggwmrWOKk4A_CwAUGIg&s",
  ];

  const CarCard = () => {
    const [liked, setLiked] = useState(false); // Like button state
  
    const toggleLike = () => {
      setLiked(!liked);
    };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="car-card">
      {/* Left Side: Image Section */}
      <div className="car-image-container">
        <button className="nav-button left" onClick={prevImage}>{"<"}</button>
        <img src={images[currentIndex]} alt="Car" className="car-image" />
        <button className="nav-button right" onClick={nextImage}>{">"}</button>
        <div className="photo-count">📷 {images.length} PHOTOS</div>
      </div>

      {/* Right Side: Car Details */}
      <div className="box">
        <div className="car-details">
          <h2 className="car-title">2023 Maruti Alto K10 VXI Plus</h2>
          <div className="title-buttons">
            <button className="certified-btn">Certified</button>
            <button className="like-btn" onClick={toggleLike}>
              <FaHeart  className={`heart-icon ${liked ? "liked" : ""}`} />
            </button>
         
        </div>
      
        <p className="car-info">5,846 kms • Petrol • Manual • 1st Owner</p>

        {/* Price Section */}
        <div className="car-price-section">
          <h3 className="car-price">₹5.21 Lakh</h3>
          <p className="emi">EMI starts @ ₹12,932/mo</p>
          <p className="line"> --------------------------------------------------------------------- </p>
        </div>

        {/* Location */}
      <div className="car-location">
        <span>📍 Yelahanka, Bangalore</span>
        <label className="compare">
          <input type="checkbox"/>Compare
        </label>

      </div>
      {/* View Seller Details Button */}
      <div className="seller-btn-container">
            <button className="seller-btn">View Seller Details</button>
      </div>

     
      

    
    </div>
  </div>
</div>
  );
};


export default CarCard;
