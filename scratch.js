const axios = require('axios');

const testCreateAccount = async () => {
  let resp = await axios.post('http://localhost:3000/users/', {
    name: 'Austin',
    email: 'jimmy@mailinator.com',
    password: 'testpassword',
    bio: 'blah',
    pro_pic: 'sample'
  });
  console.log(resp);
}
//testCreateAccount();



const testCreatePost = async () => {
  let resp = await axios.post('http://localhost:3000/users/posts', {
    title: 'test title',
    description: 'cool picture',
    publicId: 'i dunno',
    userId: 3
  });
  console.log(resp);
}
//testCreatePost();




const showUserPosts = async () => {
  let resp = await axios('http://localhost:3000/users/1/posts', {
    id: 1
  });
  console.log(resp.data);
}
//showUserPosts();





//Insert code here
const getAllUsers = async () => {
  let resp = await axios('http://localhost:3000/allusers');
  console.log(resp.data);
}
//getAllUsers();





//Insert code here
const testEditPost = async () => {
  let resp = await axios.put('http://localhost:3000/users/posts/', {
    title: "first post",
    description: "still a cool picture",
    publicId: "sample",
    id: 1
  });
  console.log(resp.data);
}
//testEditPost();





//Insert code here
const testEditProfile = async () => {
  let resp = await axios.put('http://localhost:3000/users/4', {
    name: 'Austin4Eva',
    email: 'austin.fritz33@gmail.com',
    bio: 'just tryna make mah dreamz cum true in da big city'
  });
  console.log(resp.data);
}
//testEditProfile();





//Insert code here
const testDeletePost = async () => {
  let resp = await axios.delete('http://localhost:3000/users/posts/2');
  console.log(resp.data);
}
//testDeletePost();




//Insert code here
const getAllPosts = async () => {
  let resp = await axios('http://localhost:3000/posts');
  console.log(resp.data);
}
//getAllPosts();


//Request with headers
const getAllPostsWithHeaders = async () => {
  let resp = await axios('http://localhost:3000/posts', {headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkF1c3RpbjIiLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkRDBQR3RLbXF6VWRZL2hZOHFSeUNmLm9zLkZmT3YvZGZNSGR5TGZ0OXNuTXNyWFI1VkE3Y0ciLCJlbWFpbCI6ImppbW15MkBtYWlsaW5hdG9yLmNvbSIsImJpbyI6ImJsYWgyIiwicHJvX3BpYyI6InNhbXBsZTIiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTE5VDEzOjUxOjM0LjU0MFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTE5VDEzOjUxOjM0LjU0MFoiLCJpYXQiOjE1NTMwMDM0OTR9.dTtxUI_XI4iFbvxyFYAlPKBdto_FtlhnN77wtheDITQ'
  }});
  console.log(resp.data);
}
//getAllPostsWithHeaders();

//Test request with headers and restrict
const deletePostWithPermissions = async () => {
  let resp = await axios.delete('http://localhost:3000/users/3/posts/7', {headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkF1c3RpbjIiLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkRDBQR3RLbXF6VWRZL2hZOHFSeUNmLm9zLkZmT3YvZGZNSGR5TGZ0OXNuTXNyWFI1VkE3Y0ciLCJlbWFpbCI6ImppbW15MkBtYWlsaW5hdG9yLmNvbSIsImJpbyI6ImJsYWgyIiwicHJvX3BpYyI6InNhbXBsZTIiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTE5VDEzOjUxOjM0LjU0MFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTE5VDEzOjUxOjM0LjU0MFoiLCJpYXQiOjE1NTMwMDM0OTR9.dTtxUI_XI4iFbvxyFYAlPKBdto_FtlhnN77wtheDITQ'
  }});
  console.log(resp);
}
//deletePostWithPermissions();

const createComment = async () => {
  const resp = await axios.post(`http://localhost:3000/comment/users/6/posts/2`,
    {text: "hello this is a comment"},
    { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImJsYWg3IiwicGFzc3dvcmRfZGlnZXN0IjoiJDJiJDEwJE5FdnJ3Wmc4VlhiZFdrSDRyd2JFTS5NTDJ4Q3dGbXc0b3RNTUgxdXV0WUZHdEFSU3dZS2dhIiwiZW1haWwiOiJibGFoNyIsImJpbyI6ImJsYWg3IiwicHJvX3BpYyI6ImRlZmF1bHQiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJpYXQiOjE1NTMxMzYxMjJ9.VLBtA1zZmqwtG208cEuuCUyR_V5cNNq_G45ZB3lDXyM` } });
  return resp.data;
}
//createComment();

const createLike = async () => {
  const resp = await axios.post(`http://localhost:3000/like/users/6/posts/2`, {text: "text"},
    { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImJsYWg3IiwicGFzc3dvcmRfZGlnZXN0IjoiJDJiJDEwJE5FdnJ3Wmc4VlhiZFdrSDRyd2JFTS5NTDJ4Q3dGbXc0b3RNTUgxdXV0WUZHdEFSU3dZS2dhIiwiZW1haWwiOiJibGFoNyIsImJpbyI6ImJsYWg3IiwicHJvX3BpYyI6ImRlZmF1bHQiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJpYXQiOjE1NTMxMzYxMjJ9.VLBtA1zZmqwtG208cEuuCUyR_V5cNNq_G45ZB3lDXyM` } });
  return resp.data;
}
//createLike();

const getComments = async () => {
  const resp = await axios.get(`http://localhost:3000/post/2/comments`,
    { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImJsYWg3IiwicGFzc3dvcmRfZGlnZXN0IjoiJDJiJDEwJE5FdnJ3Wmc4VlhiZFdrSDRyd2JFTS5NTDJ4Q3dGbXc0b3RNTUgxdXV0WUZHdEFSU3dZS2dhIiwiZW1haWwiOiJibGFoNyIsImJpbyI6ImJsYWg3IiwicHJvX3BpYyI6ImRlZmF1bHQiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJpYXQiOjE1NTMxMzYxMjJ9.VLBtA1zZmqwtG208cEuuCUyR_V5cNNq_G45ZB3lDXyM` } });
  console.log(resp.data);
}
//getComments();

const getLikes = async () => {
  const resp = await axios.get('http://localhost:3000/post/2/likes',
  { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImJsYWg3IiwicGFzc3dvcmRfZGlnZXN0IjoiJDJiJDEwJE5FdnJ3Wmc4VlhiZFdrSDRyd2JFTS5NTDJ4Q3dGbXc0b3RNTUgxdXV0WUZHdEFSU3dZS2dhIiwiZW1haWwiOiJibGFoNyIsImJpbyI6ImJsYWg3IiwicHJvX3BpYyI6ImRlZmF1bHQiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJpYXQiOjE1NTMxMzYxMjJ9.VLBtA1zZmqwtG208cEuuCUyR_V5cNNq_G45ZB3lDXyM` } });
  console.log(resp.data);
}
//getLikes();

const getUsersLikes = async () => {
  const resp = await axios.get('http://localhost:3000/users/6/likes',
  { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImJsYWg3IiwicGFzc3dvcmRfZGlnZXN0IjoiJDJiJDEwJE5FdnJ3Wmc4VlhiZFdrSDRyd2JFTS5NTDJ4Q3dGbXc0b3RNTUgxdXV0WUZHdEFSU3dZS2dhIiwiZW1haWwiOiJibGFoNyIsImJpbyI6ImJsYWg3IiwicHJvX3BpYyI6ImRlZmF1bHQiLCJ1cGRhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJjcmVhdGVkQXQiOiIyMDE5LTAzLTIxVDAyOjQyOjAyLjg5OFoiLCJpYXQiOjE1NTMxMzYxMjJ9.VLBtA1zZmqwtG208cEuuCUyR_V5cNNq_G45ZB3lDXyM` } });
  console.log(resp.data);
}
//getUsersLikes();
