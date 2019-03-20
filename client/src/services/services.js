import axios from 'axios';
let API_KEY = process.env.REACT_APP_API_KEY;

const baseURL =
  'https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload';
let cloudinaryApi = axios.create({
  baseURL: baseURL
});

const api = axios.create({
  baseURL: `http://localhost:3000`,
})

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
  const resp = await axios.post('http://localhost:3000/users', data);
  return resp.data;
};
// Login
const loginUser = async (data) => {
  const resp = await axios.post('http://localhost:3000/users/login', data);
  return resp.data;
}
// Edit profile
const editUser = async (id, data) => {
  const resp = await axios.put(`/users/${id}`, data);
  return resp.data;
}
// Create post
const createPost = async (id, data) => {
  const resp = await axios.post(`http://localhost:3000/users/${id}/posts`, data);
  return resp.data;
};
// Edit/Change post
const editPost = async (id, data) => {
  const resp = await axios.put(`/users/${id}/posts`, data);
  return resp.data
}
// Delete post
const deletePost = async (user_id, post_id) => {
  const resp = await axios.delete(`http://localhost:3000/users/${user_id}/posts/${post_id}`);
  return resp.data;
}
// Get all public posts once logged in
const getAllPosts = async () => {
  const resp = await axios.get('http://localhost:3000/posts');
  console.log(resp.data)
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
  getUserPosts,
};
