import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Form from "./Components/RegistrationForm";
import ListingsForm from "./Components/ListingsForm";
import FormContainer from './Components/FormContainer';
import ListingsCard from './Components/ListingsCard';
import ListingsCardContainer from './Components/ListingsCardContainer';
import DashboardContainer from './Components/DashboardContainer';
import DashboardButton from './Components/DashboardButton';
import SideBar from './Components/DashboardSideBar';
import './App.css';

const dummyData = [
  {
    propertyName: "High Rise Apartment",
    propertyType: "Apartment",
    roomType: "Entire Apartment",
    guests: "4",
    bedrooms: "2",
    beds: "3",
    bathrooms: "1.5",
    amenities: [
      "Wifi",
      "Roku",
      "Washer",
      "Dryer",
      "AC"
    ],
    cancellation: "flexible"
  },

  {
    propertyName: "Beach Getaway",
    propertyType: "House",
    roomType: "Entire Home",
    guests: "8",
    bedrooms: "4",
    beds: "4",
    bathrooms: "2",
    amenities: [
      "Wifi",
      "Cable",
      "appleTV",
      "Washer",
      "Dryer",
      "Parking",
      "AC",
      "Pool"
    ],
    cancellation: "strict"
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
          <SideBar />
            <ListingsCardContainer>
              {
                listings.map(listing => {
                  return (
                      <ListingsCard key={listing.id} details={listing} />
                  )
                })
              }
              <Link to='/listings' className='link'>
                <DashboardButton>
                  <p className='buttonText'>Add Listing</p>
                </DashboardButton>
              </Link>
            </ListingsCardContainer>
          </DashboardContainer>
      </Route>
    </div>
  );
}

export default App;