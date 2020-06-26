import React from "react";
import CardWrapper from './ListingsCardWrapper';

function ListingsCard({ details }) {

  if (!details) {
    return <h3>Working on fetching listings</h3>;
  }

  return (
    <>
      <CardWrapper>
        <h2 className='propertyName'>{details.propertyName}</h2>
        <div className='propertyDetails'>
          <p>{details.roomType} <br/> Guests: {details.guests} Rooms: {details.bedrooms} Beds: {details.beds} Bathrooms: {details.bathrooms} <br/> Cancellation Policy: {details.cancellation}</p>
        </div>
        <div className='propertyAmenities'>
          {
            !!details.amenities && !!details.amenities.length &&
            <div>
                <h4>Amenities:</h4>
                <ul className='propertyAmenities'>
                  {details.amenities.map((amenity, i) => <li key={i}>{amenity}</li>)}
                </ul>
            </div>
          }
        </div>
      </CardWrapper>
    </>
  );
};

export default ListingsCard;