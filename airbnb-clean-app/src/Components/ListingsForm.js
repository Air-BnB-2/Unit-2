import React, { useState, useEffect } from "react";
import listingsFormSchema from "./ListingsFormSchema";
import ListingsContainer from "./ListingsContainer";
import Button from "./Button";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function ListingsForm(props) {

  const initialFormValues = {
    propertyName: "",
    propertyType: "",
    roomType: "",
    guests: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    amenities: {
      wifi: false,
      cable: false,
      roku: false,
      appleTV: false,
      washer: false,
      dryer: false,
      parking: false,
      ac: false,
      pool: false,
    },
    cancellation: ""
  };

  const history = useHistory()

  const { listings, setListings } = props;
  const [formState, setFormState] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    listingsFormSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = (event) => {
    yup
      .reach(listingsFormSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors,
        });
      });
  };

  const postNewListing = newListing => {

    axios.post('https://reqres.in/api/users', newListing)
      .then(res => {
        setListings([...listings, res.data])
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
      })
      .finally(() => {
        setFormState(initialFormValues)
      })
  }

  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "button"
          ? event.target.submit
          : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  const onCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormState({
      ...formState,
      amenities: {
        ...formState.amenities,
        [name]: checked,
      },
    });
  };

  const formSubmit = event => {
    event.preventDefault()

    const newListing = {
      propertyName: formState.propertyName.trim(),
      propertyType: formState.propertyType,
      roomType: formState.roomType,
      guests: formState.guests,
      bedrooms: formState.bedrooms,
      beds: formState.beds,
      bathrooms: formState.bathrooms,
      amenities: Object.keys(formState.amenities)
        .filter(amenity => (formState.amenities[amenity] === true)),
      cancellation: formState.cancellation
    }
    postNewListing(newListing)
    history.push('/dashboard')
  }

  return (

    <ListingsContainer>
      <form onSubmit={formSubmit}>
        <h1>Add Listing</h1>
        <label htmlFor="propertyName">
          <input
            type="text"
            name="propertyName"
            placeholder="Property Name"
            value={formState.propertyName}
            onChange={inputChange}
          />
          <p className="errors">{errors.propertyName}</p>
        </label>
        <label htmlFor="propertyType" id="dropdownMenu">
          <select
            name="propertyType"
            value={formState.propertyType}
            onChange={inputChange}
          >
            <option value="">Property Type:</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condominium">Condominium</option>
            <option value="loft">Loft</option>
            <option value="townhouse">Townhouse</option>
            <option value="hostel">Hostel</option>
            <option value="other">Other</option>
          </select>
          <p className="errors">{errors.propertyType}</p>
        </label>
        <label htmlFor="roomType" id="dropdownMenu">
          <select
            name="roomType"
            value={formState.roomType}
            onChange={inputChange}
          >
            <option value="">Room Type:</option>
            <option value="entire">Entire Home/Apartment</option>
            <option value="private">Private Room</option>
            <option value="shared">Shared Room</option>
          </select>
          <p className="errors">{errors.roomType}</p>
        </label>
        <label htmlFor="guests">
          <input
            type="number"
            name="guests"
            placeholder="Number of guests"
            value={formState.guests}
            onChange={inputChange}
          />
          <p className="errors">{errors.guests}</p>
        </label>
        <label htmlFor="bedrooms">
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of bedrooms"
            value={formState.bedrooms}
            onChange={inputChange}
          />
          <p className="errors">{errors.bedrooms}</p>
        </label>
        <label htmlFor="beds">
          <input
            type="number"
            name="beds"
            placeholder="Number of beds"
            value={formState.beds}
            onChange={inputChange}
          />
          <p className="errors">{errors.beds}</p>
        </label>
        <label htmlFor="bathrooms">
          <input
            type="number"
            name="bathrooms"
            placeholder="Number of bathrooms"
            value={formState.bathrooms}
            onChange={inputChange}
          />
          <p className="errors">{errors.bathrooms}</p>
        </label>
        <div className="checkbox">
          <label htmlFor="amenities">
            <h4>Amenities:</h4>
            <div id="amenities">
              Wifi
                <input
                type="checkbox"
                name="wifi"
                value="wifi"
                checked={formState.wifi}
                onChange={onCheckboxChange}
              />
                Cable
                <input
                type="checkbox"
                name="cable"
                value="cable"
                checked={formState.cable}
                onChange={onCheckboxChange}
              />
                Roku
                <input
                type="checkbox"
                name="roku"
                value="roku"
                checked={formState.roku}
                onChange={onCheckboxChange}
              />
                Apple TV
                <input
                type="checkbox"
                name="appleTV"
                value="appleTV"
                checked={formState.appleTV}
                onChange={onCheckboxChange}
              />
                Washer
                <input
                type="checkbox"
                name="washer"
                value="washer"
                checked={formState.washer}
                onChange={onCheckboxChange}
              />
                Dryer
                <input
                type="checkbox"
                name="dryer"
                value="dryer"
                checked={formState.dryer}
                onChange={onCheckboxChange}
              />
                Parking
                <input
                type="checkbox"
                name="parking"
                value="parking"
                checked={formState.parking}
                onChange={onCheckboxChange}
              />
                AC
                <input
                type="checkbox"
                name="ac"
                value="ac"
                checked={formState.ac}
                onChange={onCheckboxChange}
              />
                Pool
                <input
                type="checkbox"
                name="pool"
                value="pool"
                checked={formState.pool}
                onChange={onCheckboxChange}
              />
            </div>
          </label>
        </div>
        <label htmlFor="cancellation" id="dropdownMenu">
          <select
            name="cancellation"
            value={formState.cancellation}
            onChange={inputChange}
          >
            <option value="">Cancellation Policy:</option>
            <option value="strict">Strict</option>
            <option value="moderate">Moderate</option>
            <option value="flexible">Flexible</option>
            <option value="superStrict30">Super Strict (30 days)</option>
            <option value="superstrict60">Super Strict (60 days)</option>
          </select>
          <p className="errors">{errors.cancellation}</p>
        </label>
        <Button disabled={buttonDisabled} name="submit">
          Submit
              </Button>
      </form>
    </ListingsContainer>
  );
}
