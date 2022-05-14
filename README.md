# Table of contents
- [Table of contents](#table-of-contents)
  - [SASS](#sass)
  - [Screenshot](#screenshot)
  - [Instructions](#instructions)
  - [Add new post](#add-new-post)
  - [STYLING notes](#styling-notes)
  - [Heroku tutorial](#heroku-tutorial)


## SASS
sass -w sass:css -s compressed
sass -w src/public/sass:src/public/css -s compressed

## Screenshot
<!-- ![](docs/screenshot.png) -->
![site screenshot](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/webpage.webp?v=1652487637481)

## Instructions
- cd blog-revamp
- npm i
- npm run dev

## Add new post
- add the img and code inside index.ejs
  - add the link to the new route
- add the new route to routes.js
- create a new .ejs file inside /post

## STYLING notes
To make a new post just copy the styles in `TEMPLATE.ejs`

## Heroku tutorial
https://devcenter.heroku.com/articles/deploying-nodejs