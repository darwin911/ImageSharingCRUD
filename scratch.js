const axios = require('axios');

const testCreateAccount = async () => {
  let resp = await axios.post('http://localhost:3000/users/login', {
    email: 'jimmy@mailinator.com',
    password: 'testpassword',
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
showUserPosts();
