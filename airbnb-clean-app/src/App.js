import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Form from "./Components/RegistrationForm";
import ListingsForm from "./Components/ListingsForm";
import FormContainer from './Components/FormContainer';
import ListingsCard from './Components/ListingsCard';
import DashboardContainer from './Components/DashboardContainer';
import './App.css';

const dummyData = [
  {
    propertyName: "NARNIA",
    propertyType: "other",
    roomType: "entire",
    guests: "8",
    bedrooms: "2000",
    beds: "12",
    bathrooms: "0",
    amenities: [
      "wifi",
      "pool"
    ],
    cancellation: "flexible"
  },

  {
    propertyName: "MIDDLE EARTH",
    propertyType: "other",
    roomType: "entire",
    guests: "10",
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    amenities: {
      wifi: true,
      cable: false,
      roku: false,
      appleTV: true,
      washer: false,
      dryer: false,
      parking: false,
      ac: false,
      pool: false,
    },
    cancellation: "strict"
  },

  {
    propertyName: "NEVERLAND",
    propertyType: "other",
    roomType: "entire",
    guests: "4",
    bedrooms: "6",
    beds: "3",
    bathrooms: "3",
    amenities: {
      wifi: false,
      cable: true,
      roku: false,
      appleTV: false,
      washer: false,
      dryer: false,
      parking: false,
      ac: false,
      pool: true,
    },
    cancellation: "moderate"
  }
]

function App() {

  const [listings, setListings] = useState([]);

  //SIDE EFFECTS

  useEffect(() => {
    setListings(dummyData)
  }, [])

  return (
    <div className="App">
      <Header />
      <Route path="/login">
        <FormContainer>
          <Login />
        </FormContainer>
      </Route>
      <Route path="/register">
        <FormContainer>
          <Form />
        </FormContainer>
      </Route>
      <Route path="/listings">
        <FormContainer>
          <ListingsForm listings={listings} setListings={setListings} />
        </FormContainer>
      </Route>
      <Route path='/dashboard'>
        <DashboardContainer>
          {
            listings.map(listing => {
              return (
                  <ListingsCard key={listing.id} details={listing} />
              )
            })
          }
        </DashboardContainer>
      </Route>
    </div>
  );
}

export default App;