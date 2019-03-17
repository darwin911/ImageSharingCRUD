# PiclePost

## Project Description
A fullstack React app where users can post and share photos.

## Challenges

Rendering the views differently when a user is logged in vs. when a user is not logged in. We will check if a user is logged in as part of state to amend this.

## MVP and Post MVP
### MVP
MVP will be an app where you can post pictures after registering and logging in. You will be able to view pictures of other users' posts after logging in. You will be able to go to your user profile page and view pictures that you have posted.
### POST MVP
For Post MVP you will be able to like other peoples posts, and comment on other people's posts. You will also be able to search for other users and go to their pages to see their posts.

## Feature List
App registration, app login, post/see/change/delete a photo (CRUD).

## Entity Relationship Diagram
![diagram of the database tables, schemas, and relations.](https://trello-attachments.s3.amazonaws.com/5c8be7275751825d0fd18313/781x512/eef31a9b0efd1eb005c47bbc66b12db9/DatabaseERD.jpg)

## API Endpoint Documentations
`userRouter.post "/" ` -->create user

`userRouter.post "/login"` --> login user

`"/user/:id/"` --> user profile page

`userRouter.post "/user/:id/posts"` --> create post

## List Dependencies
Axios, Express, Morgan, Body-Parser, Cors, React-router-dom
Cloudinary-React, React-File-Base64

## Wireframes
![Wireframe for Project Proposal] (https://photos.app.goo.gl/RDxoH5fjsw49QGFz6)

## Component Hierarchy

![Components](https://trello-attachments.s3.amazonaws.com/5c8be5981231c1271f26bc10/5c8eb50a8768ee6416e5cecc/5d3379f9724c2c065a503aa52c1b45f7/IMG_20190316_144600.jpg)
