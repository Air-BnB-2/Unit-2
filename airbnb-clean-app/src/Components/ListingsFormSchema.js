import * as yup from "yup";

const listingsFormSchema = yup.object().shape({
  propertyName: yup.string()
    .required("Please enter a property name")
    .min(2, "Property Name must include at least 2 characters"),
  propertyType: yup.string().oneOf(
    [
      "apartment",
      "house",
      "condominium",
      "loft",
      "townhouse",
      "hostel",
      "other",
    ],
    "Please select a property type"
  ),
  roomType: yup.string().oneOf(
    ["entire", "private", "shared"],
    "Please select a room type"
  ),
  guests: yup.string().required("Please select number of guests"),
  bedrooms: yup.string().required("Please select number of bedrooms"),
  beds: yup.string().required("Please select number of beds"),
  bathrooms: yup.string().required("Please select number of bathrooms"),
  cancellation: yup.string().oneOf(
    ["strict", "moderate", "flexible", "superStrict30", "superStrict60"],
    "Please select cancellation policy"
  ),
});

export default listingsFormSchema;
