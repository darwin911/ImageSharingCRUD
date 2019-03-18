const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Router } = require('express');
const { hash, compare, encode, verify } = require('./auth');
const { Post, User, Comment, Likes } = require('./models');

// allow the port to be defined with an env var or a dev value
const PORT = process.env.PORT || 3000;

// after importing middleware define app and mount them
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

// mount route handlers
// --> create user
app.post('/users', async (req, res) => {
  try {
    let {name, password, email, bio, pro_pic} = req.body;
    let password_digest = await hash(password);
    const createUser = await User.create({
      name,
      password_digest,
      email,
      bio,
      pro_pic
    })
    let token = await encode(createUser.dataValues)
    res.locals.photoapptoken = token
  } catch (e) {
    console.error(e);
  }
})
// --> login user
app.post('/users/login', async (req, res) => {
  try {
    let {password} = req.body;
    const loginUser = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    let {password_digest} = loginUser;
    let verify = await compare(password, password_digest);
    if (verify) {
      let token = await encode(loginUser.dataValues)
      res.locals.photoapptoken = token
    } else {
      res.status(403)
    }
  } catch (e) {
    res.status(404).send(e.message)
  }
})
// --> user profile page
  app.get('/users', async (req, res) => {
    try {

    } catch (e) {

    }
  })
  // --> get ALL users
    app.get('/allusers', async (req, res) => {
      try {

      } catch (e) {

      }
    })
// --> edit profile page
app.put('/users', async (req, res) => {
  try {

  } catch (e) {

  }
})
// --> create post
app.post('/users/posts', async (req, res, next) => {
  try {
    let {title, description, publicId, userId} = req.body
    console.log(title, description, publicId, userId);
    const createPost = await Post.create({
      title, description, publicId
    })
    let selectedUser = await User.findOne({
      where: {
        id: userId
      }
    })
    let resp = await createPost.setUser(selectedUser)
    res.json(resp)
  } catch (e) {
    next(e)
  }
})
// --> show one user's posts
app.get('/users/:id/posts', async (req, res, next) => {
  try {
    let {id} = req.params;
    console.log(req);
    const userPosts = await Post.findAll({
      where: {
        user_id: id
      }
    })
    let selectedUser = await User.findOne({
      where: {
        id
      }
    })
    res.json([userPosts,selectedUser])
  } catch (e) {
    next(e)
  }
})
// --> edit posts (tentatively done)
app.put('/users/posts', async (req, res, next) => {
  try {
    const userPost = await User.findByPk(req.params.id)
    userPost.update(req.body)
    res.json(userPost)
  } catch (e) {
    next(e)
  }
})
// --> delete posts (tentatively done)
app.delete('/users/posts', async (req, res, next) => {
  try {
    const userPost = await Post.findByPk(req.params.id)
    userPost.destroy();
    res.status(200).send(`Deleted post with id ${req.params.id}`)
  } catch (e) {
    next(e)
  }
})

// generic "tail" middleware for handling errors
app.use((e, req, res, next) => {
  console.log(e);
  res.status(404).send(e.message);
});

// bind app to a port
app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
