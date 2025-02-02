import React, { useState } from "react";

import { FaHeart, FaCommentDots, FaShareAlt } from "react-icons/fa";
import "./CarCard.css"; // Updated CSS


//const CarCard = () => {
  const images = [
    "https://www.hdwallpapers.in/download/adro_ford_mustang_coupe_car_white_background_4k_hd_cars-3840x2160.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3cWAvDO_uasESfcwg8m6MWKUH-JEvz3iuA&s",
    "https://vinfastauto.us/themes/custom/vinfast_v2/images/v3/vf-8/exterior-color-white.webp",
    "https://images.pexels.com/photos/20200900/pexels-photo-20200900/free-photo-of-blue-bmw-i5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

      {/* Trending and Bottom Actions */}
          <div className="trending-section">
            <span className="trending-icon">⚡</span> <strong>Trending Car!</strong>  High chances of sale in next 6 days
          </div>

          
        </div>
     
      
    </div>
    <div className="bottom-actions">
            <button className="chat-btn">
              <FaCommentDots className="action-icon" /> Chat with Seller
            </button>
            <button className="share-btn">
              <FaShareAlt className="action-icon" /> Share
            </button>
    </div>
  </div>
  );
};


export default CarCard;
