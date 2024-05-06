const GOOGLE_API_KEY = "";
//need to get api from google map- google map static api;

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `xxxxxxxxxxx${lat},${lng}&zoom=14&size=400x200xxxxxxxxxx&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
