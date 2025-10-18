import React, { useState, useEffect } from "react";
import { getRestaurantsAPI } from "../services/api";
import "./HomePage.css"; 

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurantsAPI();
      setRestaurants(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading restaurants...</div>;
  }

  return (
    <div className="homepage">
      <h2 className="title">Restaurants</h2>
      {restaurants.length === 0 ? (
        <p className="empty">No restaurants available</p>
      ) : (
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant._id}>
              <img
                src={restaurant.image || "/placeholder.jpg"} // fallback image
                alt={restaurant.name}
                className="restaurant-image"
              />
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-cuisine">
                  {restaurant.cuisine.join(", ")}
                </p>
                {restaurant.rating && (
                  <p className="restaurant-rating">
                    ⭐ {restaurant.rating.toFixed(1)} / 5
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;