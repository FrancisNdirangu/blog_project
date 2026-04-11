# Project - Blog Web Application

### Goal - To create a blog web app that allows the user to create and view blog posts. The user should also be able to edit and delete blog posts. The styling will be an important aspect to ensure a good user experience.

### Types of files

#### Node file - for the endpoints

#### EJS file - for the structure of the website

#### CSS file - for the styling of the website

## Features

#### Post creation

#### Post viewing

#### Post update

#### Post deleting

#### Styling - should be well-styled and responsive for both computer and mobile

## Explanation of the Features

#### 1. A user should be able to write a post on a form and when he presses the submit button the post should appear at the bottom
#### of the screen.

#### 2. The users blog posts should be saved in an array object.

#### 3. Each new post will appear below the one made before it. 

#### 4. There will be an edit button on each post. When a user clicks that button the corresponding post should be appear in an editable form.
#### This means clicking edit on a post should retrieve the post from the array at its particular index.

#### 5. The user will then be able to edit the post and when they click submit the edited post should take the place of the original post in the array.
#### This will make the edited post appear in place of the original post.

#### 6. There will be a delete button on each post. When the user clicks the delete button the corresponding post should be removed from the array with all the posts.
#### Meaning that the delete button on each post knows the index of each post.


### How we will make the blog post array

#### Assume we have started the server.

#### We will initialize an empty list on the index.js file.

#### We will have a html form in the index.ejs file that will send a post request to the server thus adding an element to the array.

#### We must keep track of the index of each element in the array. To do this we must have a counter in the index.js file that increments by one every time we make a post. The blog post array will be a dictionary that is like the following  { index:incremental_number_at point_of_post_creation,post:user_input}. This information will be appended to the array in the /post_submit endpoint when the user clicks submit on the blog.

#### so we will now make a for loop that will increments over the array to then post each blog_post element in the ejs file. We need to make sure that the elements of the array are in the res.locals

### How we will deleting work

#### We want the user to be able to delete each post by clicking the delete button that is on each post.

#### So the delete button of the post 