import axios from 'axios';

const baseURL =
  'https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload';

let cloudinaryApi = axios.create({
  baseURL: baseURL
});

const BASE_URL = 'https://post-picle.herokuapp.com';

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
  console.log(resp.data)
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
  return resp.data;
};
// Get users own post on profile page
const getUserPosts = async (id) => {
  const resp = await axios.get(`${BASE_URL}/users/${id}/posts`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
};

//endpoint to record a like on a post
const createLike = async (user_id, post_id) => { //here user_id refers to the user who is doing the liking
  const resp = await axios.post(`${BASE_URL}/like/users/${user_id}/posts/${post_id}`, {text: "placeholder"},
     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}

//endpoint to make a comment on a post
const createComment = async (user_id, post_id, text) => { //here user_id refers to the user who is doing the posting
  const resp = await axios.post(`${BASE_URL}/comment/users/${user_id}/posts/${post_id}`, {text},
     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}

//endpoint to get all comments for a post
const getPostComments = async (post_id) => { //here user_id refers to the user who is doing the posting
  const resp = await axios.get(`${BASE_URL}/post/${post_id}/comments`,
     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}

//endpoint to get all likes for a post
const getPostLikes = async (post_id) => { //here user_id refers to the user who is doing the posting
  const resp = await axios.get(`${BASE_URL}/post/${post_id}/likes`,
     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}

//endpoint to get all likes for a user
const getUserLikes = async (user_id) => { //here user_id refers to the user whose likes you're getting
  const resp = await axios.get(`${BASE_URL}/users/${user_id}/likes`,
     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
  return resp.data;
}


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
  createLike,
  createComment,
  getPostComments,
  getPostLikes,
  getUserLikes,
};
