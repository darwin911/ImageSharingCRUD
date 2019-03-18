const axios = require('axios');

const testCreateAccount = async () => {
  let resp = await axios.post('http://localhost:3000/users/login', {
    email: 'jimmy@mailinator.com',
    password: 'testpassword',
  });
  console.log(resp);
}
testCreateAccount();
