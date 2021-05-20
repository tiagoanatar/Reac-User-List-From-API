import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaBuilding } from 'react-icons/fa'

const Tour = ({ id, name, email, address, phone, company, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <span><FaEnvelope className="icon" /> {email}</span>
          <span><FaMapMarkerAlt className="icon" /> {address.street}, {address.suite}, {address.city}</span>
          <span><FaMobileAlt className="icon" /> {phone}</span>
          <span><FaBuilding className="icon" /> {company.name}</span>
        </div>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          remove user
        </button>
      </footer>
    </article>
  );
};

export default Tour;
