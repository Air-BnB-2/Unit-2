import React from "react";
import styled from "styled-components";
const StyledWrap = styled.div``;
const StyledPropertyCard = styled.div`
  display: flex;
`;
function ListingsDashboard({ details }) {
  if (!details) {
    return <h3>Working on fetching listings</h3>;
  }
  return (
    <>
      <StyledWrap>
        <StyledPropertyCard>
          <h2>Property Name: {details.propertyName}</h2>
          <p>Property Type: {details.propertyType}</p>
          <p>Room Type: {details.roomType}</p>
          <p>Accomodates: {details.guests}</p>
          <p>Number of bedrooms: {details.bedrooms}</p>
          <p>Number of beds: {details.beds}</p>
          <p>Number of bathrooms: {details.bathrooms}</p>
          {!!details.amenities && !!details.amenities.length && (
            <div>
              Amenities:
              <ul>
                {details.amenities.map((amenitie, i) => (
                  <li key={i}>{amenitie}</li>
                ))}
              </ul>
            </div>
          )}
          <p>Cancellation Policy: {details.cancellation}</p>
        </StyledPropertyCard>
      </StyledWrap>
    </>
  );
}
export default ListingsDashboard;
