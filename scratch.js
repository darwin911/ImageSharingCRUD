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
    userId: 1
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
getAllPosts();
