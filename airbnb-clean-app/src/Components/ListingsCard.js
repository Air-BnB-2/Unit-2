import React from "react";
import CardWrapper from './ListingsCardWrapper';

function ListingsCard({ details }) {

  if (!details) {
    return <h3>Working on fetching listings</h3>;
  }

  return (
    <>
      <CardWrapper>
        <h3>{details.propertyName}</h3>
        <div className='propertyDetails'>
          <p className=''>{details.roomType} Guests: {details.guests} Rooms: {details.bedrooms} Beds: {details.beds} Bathrooms: {details.bathrooms} Cancellation Policy: {details.cancellation}</p>
        </div>
        <div className='propertyAmenities'>
          {
            !!details.amenities && !!details.amenities.length &&
            <div>
                <h4>Amenities:</h4>
                <p className='propertyAmenities'>
                  {details.amenities.map((amenity) => <>{amenity},</>)}
                </p>
            </div>
          }
        </div>
      </CardWrapper>
    </>
  );
};

export default ListingsCard;