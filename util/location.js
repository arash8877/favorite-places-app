const GOOGLE_API_KEY = "";
//need to get api from google map- google map static api;

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `xxxxxxxxxxx${lat},${lng}&zoom=14&size=400x200xxxxxxxxxx&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}


// to convert lat and lng to a human readable address we need google-map Geocoding API.
export async function getAddress (lat, lng) {
  const geoUrl = `xxxxxxxx?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(geoUrl);

  if (!response.ok) {
    throw new error('Failed to fetch address')
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}

