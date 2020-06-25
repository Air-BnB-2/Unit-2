import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div``;
const StyledPropertyCard = styled.div`
  display: flex;
`;

const ListingsDashboard = (props) => {
  const { listingsForm } = props;

  if (!listingsForm) {
    return <p>No Listings Found!</p>;
  }

  return (
    <>
      <StyledWrap>
        <StyledPropertyCard>
          {listingsForm.propertyName}
          {listingsForm.roomName}
          {listingsForm.roomType}
          {listingsForm.guests}
          {listingsForm.bedrooms}
          {listingsForm.beds}
          {listingsForm.bathrooms}
        </StyledPropertyCard>
      </StyledWrap>
    </>
  );
};

export default ListingsDashboard;
