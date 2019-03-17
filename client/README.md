# Image Sharing

#Deliverables
================
##Project Description
A fullstack React app where users can post and share photos.
##Challenges
Rendering the views differently when a user is logged in vs. when a user is not logged in.
##MVP and Post MVP
MVP will be an app that you can post pictures after registering and logging on. You will be able to view pictures of other users' posts after logging in. You will be able to go to your user profile page and view pictures that you had posted.
POST MVP you will be able to like other peoples posts, and comment. Search for other users. Able to go to other users page to see their posts.
##Feature List
App registration, app login, post/see/change/delete a photo (CRUD).
##Entity Relationship Diagram
![diagram of the database tables, schemas, and relations.](https://trello-attachments.s3.amazonaws.com/5c8be7275751825d0fd18313/781x512/eef31a9b0efd1eb005c47bbc66b12db9/DatabaseERD.jpg)
##API Endpoint Documentations
userRouter.post "/" -->create user
userRouter.post "/login" --> login user
"/user/:id/" --> user profile page
userRouter.post "/user/:id/posts" --> create post
##List Dependencies
Axios, Express, Morgan, Body-Parser, Cors, React-router-dom
Cloudinary-React, React-File-Base64
##Wireframes
![Wireframe for Project Proposal](https://photos.app.goo.gl/RDxoH5fjsw49QGFz6)
