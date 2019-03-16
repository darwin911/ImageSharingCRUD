import axios from 'axios';
let api_key = process.env.REACT_APP_API_KEY;

const baseURL = "https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload";
let cloudinaryApi = axios.create({
  baseURL: baseURL,
});


async function uploadPhoto (filepath) {
  console.log('triggered');
  let resp = await axios.post("https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload",
  {
    file: filepath,
    upload_preset: 'v3ntb0un'
  });
  return resp;
}

export default uploadPhoto;
