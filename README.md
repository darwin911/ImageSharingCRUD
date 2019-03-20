# **PostPic**

## Project Description
A fullstack React app with an Express backend where users can post and share pictures after registering and logging in. Users can view their pictures as well as the pictures of other users. Users can only upload, delete, and edit pictures for their own account.  

## Challenges

Rendering the views differently when a user is logged in vs. when a user is not logged in. We will check if a user is logged in as part of state to amend this.

## MVP and Post MVP
### MVP
MVP will be an app where you can post pictures after registering and logging in. You will be able to view pictures of other users' posts after logging in. You will be able to go to your user profile page and view pictures that you have posted.

- Register User
- Login
- See all posts
- Create own post
- Edit own post
- Delete own post

### POST MVP
For Post MVP you will be able to like other peoples posts, and comment on other people's posts. You will also be able to search for other users and go to their pages to see their posts.

- Like posts
- Add comments

## Feature List
App registration, app login, post/see/change/delete a photo (CRUD).

## Entity Relationship Diagram
![diagram of the database tables, schemas, and relations.](https://trello-attachments.s3.amazonaws.com/5c8be5981231c1271f26bc10/5c8be7275751825d0fd18313/eb845c46a49ac4fbbc2f5de7ef849866/DatabaseERD.jpg)

## API Endpoint Documentations
`app.post "/users"`  -->create user

`app.post "/users/login"` --> login user

`app.get "/users/:id/posts"` --> user profile page

`app.put "/users/:id/"` --> edit profile page

`app.post "/users/:id/posts"` --> create post

`app.get "/users/:id/post"` --> show all post by user

`app.get "/posts"` --> show all posts of all users

`app.put "/users/:id/posts"` --> edit post

`app.delete "/users/:id/posts/:post_id"` --> delete post

## List Dependencies
- Axios
- Express
- Morgan
- Pg
- Nodemon
- Sequelize
- Body-Parser,
- Cors,
- React-router-dom,
- Cloudinary-React,
- React-File-Base64
- Bcrypt
- Jsonwebtoken

## Wireframes
![Wireframe Main View](https://trello-attachments.s3.amazonaws.com/5c8be5981231c1271f26bc10/5c8be7487788656e2020932e/5c88de08d90376e20eebd526d9abac48/IMG_20190316_150426.jpg)
![Wireframe User View](https://trello-attachments.s3.amazonaws.com/5c8be5981231c1271f26bc10/5c8be7487788656e2020932e/4baeee51e1ab99b32baf87718ad1377f/IMG_20190316_151002.jpg)
![Wireframe Public View](https://trello-attachments.s3.amazonaws.com/5c8be5981231c1271f26bc10/5c8be7487788656e2020932e/0a79c57c7b7d85be37c520380037149c/IMG_20190316_151428.jpg)

## Component Hierarchy

![Components](https://trello-attachments.s3.amazonaws.com/5c8be5981231c1271f26bc10/5c8eb50a8768ee6416e5cecc/5d3379f9724c2c065a503aa52c1b45f7/IMG_20190316_144600.jpg)
