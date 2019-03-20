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
testEditPost();





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
