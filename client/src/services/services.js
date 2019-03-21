import axios from 'axios';
// let API_KEY = process.env.REACT_APP_API_KEY;

const baseURL =
  'https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload';
let cloudinaryApi = axios.create({
  baseURL: baseURL
});

const BASE_URL = 'http://localhost:3000'

// const api = axios.create({
//   baseURL: `http://localhost:3000`,
// })

const uploadPhoto = async (data) => {
  console.log('triggered');
  let resp = await cloudinaryApi.post('' ,
    {
      file: data,
      upload_preset: 'v3ntb0un'
    }
  );
  return resp;
}
// Register
const createUser = async (data) => {
  const resp = await axios.post(`${BASE_URL}/users`, data);
  return resp.data;
};
// Login
const loginUser = async (data) => {
  const resp = await axios.post(`${BASE_URL}/users/login`, data);
  return resp.data;
}
// Edit profile
const editUser = async (id, data) => {
  const resp = await axios.put(`${BASE_URL}/users/${id}`, data, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}
// Create post
const createPost = async (id, data) => {
  const resp = await axios.post(`${BASE_URL}/users/${id}/posts`, data, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
};
// Edit/Change post

const editPost = async (id, data) => {
  const resp = await axios.put(`${BASE_URL}/users/${id}/posts`, data, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data
}
// Delete post
const deletePost = async (user_id, post_id) => {
  const resp = await axios.delete(`${BASE_URL}/users/${user_id}/posts/${post_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}
// Get all public posts once logged in
const getAllPosts = async () => {
  const resp = await axios.get(`${BASE_URL}/posts`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  console.log(resp.data)
  return resp.data;
};
// Get users own post on profile page
const getUserPosts = async (id) => {
  const resp = await axios.get(`${BASE_URL}/users/${id}/posts`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
};

export {
  uploadPhoto,
  createUser,
  loginUser,
  editUser,
  createPost,
  editPost,
  deletePost,
  getAllPosts,
  getUserPosts,
};
