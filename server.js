const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Router } = require('express')

// allow the port to be defined with an env var or a dev value
const PORT = process.env.PORT || 3000;

// declare userRouter
const userRouter = Router();

// after importing middleware define app and mount them
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

// mount route handlers
// --> create user
userRouter.post('/', async (req, res) => {
  try {
    const createUser = await User.create(req.body)
    res.json(createUser.get())
  } catch (e) {
    res.status(500).send(e.message)
  }
})
// --> login user
userRouter.post('/login', async (req, res) => {
  try {
    const loginUser = await User.findone({
      where: {
        username: req.body.username
      }
    });
  } catch (e) {
    res.status(500).send(e.message)
  }
})
// --> user profile page
  userRouter.get('/user/:id', async (req, res) => {
    try {

    } catch (e) {

    }
  })
// --> edit profile page
userRouter.put('/user/:id/', async (req, res) => {
  try {

  } catch (e) {

  }
})
// --> create post
userRouter.post('/user/:id/posts', async (req, res, next) => {
  try {
    const createPost = await Post.create(req.body)
    res.json(createPost.get())
  } catch (e) {
    next(e)
  }
})
// --> show one user's posts
userRouter.get('/users/posts', async (req, res, next => {
  try {
    const userPosts = await Post.findAll()
    res.json({posts})
  } catch (e) {
    next(e)
  }
})
// --> show ALL posts
userRouter.get('/posts', async (req, res) => {
  try {

  } catch (e) {

  }
})
// --> edit posts (tentatively done)
userRouter.put('/user/:id/posts', async (req, res, next) => {
  try {
    const userPost = await User.findByPk(req.params.id)
    userPost.update.(req.body)
    res.json(userPost)
  } catch (e) {
    next(e)
  }
})
// --> delete posts (tentatively done)
userRouter.delete('/user/:id/posts', async (req, res, next) => {
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
  res.status(500).send(e.message);
});

// bind app to a port
app.listen(PORT, () => console.log(`up and running on port ${PORT}`));

module.exports = userRouter
