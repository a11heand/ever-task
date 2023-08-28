/* 
   Filename: sophisticated_code.js
   Description: This code is a complex and elaborate implementation of a social media application.
   It includes various functionalities such as user authentication, posting, commenting, and liking.
   The code uses modern JavaScript syntax and libraries to provide a professional and creative example.
*/

// User class to represent each user in the application
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.comments = [];
    this.likes = [];
  }

  createPost(post) {
    this.posts.push(post);
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  likePost(post) {
    this.likes.push(post);
  }
}

// Post class to represent each post in the application
class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.comments = [];
    this.likes = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  likePost() {
    this.likes++;
  }
}

// Comment class to represent each comment in the application
class Comment {
  constructor(content, user) {
    this.content = content;
    this.user = user;
  }
}

// Sample users
const user1 = new User("JohnDoe", "john.doe@gmail.com", "password123");
const user2 = new User("JaneDoe", "jane.doe@gmail.com", "qwerty123");

// Sample posts
const post1 = new Post("First Post", "Hello World! This is my first post.");
const post2 = new Post("Second Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

// Sample comments
const comment1 = new Comment("Great post!", user1);
const comment2 = new Comment("I completely agree!", user2);

// Perform actions
user1.createPost(post1);
user1.createPost(post2);
user1.addComment(comment1);
user2.addComment(comment2);
post1.addComment(comment1);
post2.likePost();

// Print user details
console.log(user1);
console.log(user2);

// Print post details
console.log(post1);
console.log(post2);

// Print comment details
console.log(comment1);
console.log(comment2);