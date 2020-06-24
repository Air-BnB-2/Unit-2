import React from "react";
import styled from "styled-components";

const ListingsDashboard = (props) => {
  const { listingsForm } = props;

  if (!listingsForm) {
    return <p>No Listings Found!</p>;
  }

  return <>{!!listingsForm}</>;
};

export default ListingsDashboard;