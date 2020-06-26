import React from "react";
import CardWrapper from './ListingsCardWrapper';

function ListingsCard({ details }) {

  if (!details) {
    return <h3>Working on fetching listings</h3>;
  }

  return (
    <>
      <CardWrapper>
        <h3>Property Name: {details.propertyName}</h3>
        <p>Property Type: {details.propertyType}</p>
        <p>Room Type: {details.roomType}</p>
        <p>Accomodates: {details.guests}</p>
        <p>Number of bedrooms: {details.bedrooms}</p>
        <p>Number of beds: {details.beds}</p>
        <p>Number of bathrooms: {details.bathrooms}</p>
        {
          !!details.amenities && !!details.amenities.length &&
          <div>
            <h4>Amenities:</h4>
              <ul>
              {details.amenities.map((amenity, i) => <li key={i}>{amenity}</li>)}
            </ul>
          </div>
        }
        <p>Cancellation Policy: {details.cancellation}</p>
      </CardWrapper>
    </>
  );
};

export default ListingsCard;