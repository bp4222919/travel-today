import React from 'react';
import "./ContantConStyle.css";

function ContentContent() {
  return (
    <div className="content">
      <div className="map">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=London&t=&z=10&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <form>
            <label>Your Name</label>
            <input type="text" required />
            <label>Your Email</label>
            <input type="email" required />
            <label>Destination</label>
            <select defaultValue="Select Your Destination">
              <option value="Select Your Destination" disabled>
                Select Your Destination
              </option>
              <option value="South Africa">South Africa</option>
              <option value="Maldives">Maldives</option>
              <option value="Egypt">Egypt</option>
              <option value="London">London</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Nepal">Nepal</option>
            </select>
            <label>Category</label>
            <select defaultValue="Select Your Category">
              <option value="Select Your Category" disabled>
                Select Your Category
              </option>
              <option value="Adventure">Adventure</option>
              <option value="Baches">Baches</option>
              <option value="Boat Tours">Boat Tours</option>
              <option value="City Tours">City Tours</option>
              <option value="Hiking">Hiking</option>
            </select>
            <br />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-box">
          <h2>Your Heading Here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima,
             ut dolor quo optio rerum debitis sed expedita et aliquam numquam porro
              animi dolores magnam voluptate ducimus ullam sit ex impedit amet 
              consequatur! Vel odio velit minima impedit quisquam est voluptatem, 
              eius perspiciatis minus, similique sed! Quo dignissimos nobis voluptatibus
               non ab laborum quae, a sapiente quasi architecto, dolor nam, minima 
               consequuntur animi sit quis porro eius nulla labore officia sunt? 
               Cupiditate, accusamus sequi! Obcaecati nihil veniam voluptates harum 
               ut explicabo nostrum, temporibus non magnam iure ipsa vitae pariatur 
               atque maxime, corporis autem quidem officia eligendi assumenda debitis in dolores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentContent;
