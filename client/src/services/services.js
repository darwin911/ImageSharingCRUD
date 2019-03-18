import axios from 'axios';
let api_key = process.env.REACT_APP_API_KEY;

const baseURL =
  'https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload';
let cloudinaryApi = axios.create({
  baseURL: baseURL
});

async function uploadPhoto(filepath) {
  console.log('triggered');
  let resp = await axios.post(
    'https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload',
    {
      file: filepath,
      upload_preset: 'v3ntb0un'
    }
  );
  return resp;
}
// Register
const createUser = async (data) => {
  const resp = await axios.post('/user', data);
  return resp.data;
};
// Login
 const loginUser = async (data) => {
  const resp = await api.post('/login', data)
 return resp.data;
 }
 // Edit profile
const editUser = async (id, data) => {
  const resp = await axios.put(`/user/${id}`, data);
  return resp.data;
}
// Create post
const createPost = async (id, data) => {
  const resp = await axios.post(`/user/${id}/post`, data);
  return resp.data;
};
// Edit/Change post
const editPost = async (id, data) => {
  const resp = await axios.put(`/user/${id}/${post_id}`, data);
  return resp.data
}
// Delete post
export const deletePost = async (id) => {
  const resp = await api.delete(`/user/${id}/${post_id}`);
  return resp.data;
}
// Get all posts once logged in
const getAllPosts = async () => {
  const resp = await axios.get('/posts');
  return resp.data;
};
// Get users own post on profile page
const getUserPosts = async id => {
  const resp = await axios.get(`/user/${id}/posts`);
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
  getUserPosts

 }
