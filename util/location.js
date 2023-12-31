GOOGLE_API_KEY = "AIzaSyCFe5gDVVJtzXrpD8JxPJtK6m9_s9rcWPk";

export function getLocationPreview(lat, lng) {
  const location = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=300x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return location;
}

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  const address = data.results[0].formatted_address;

  return address;
};
