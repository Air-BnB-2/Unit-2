import * as Yup from "yup";

const listingsFormSchema = Yup.object().shape({
  propertyName: Yup.string()
    .required("Please enter a property name")
    .min(2, "Property Name must include at least 2 characters"),
  propertyType: Yup.string().oneOf(
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
  roomType: Yup.string().oneOf(
    ["entire", "private", "shared"],
    "Please select a room type"
  ),
  guests: Yup.string().required("Please select number of guests"),
  bedrooms: Yup.string().required("Please select number of bedrooms"),
  beds: Yup.string().required("Please select number of beds"),
  bathrooms: Yup.string().required("Please select number of bathrooms"),
  cancellation: Yup.string().oneOf(
    ["strict", "moderate", "flexible", "superStrict30", "superStrict60"],
    "Please select cancellation policy"
  ),
});

export default listingsFormSchema;
