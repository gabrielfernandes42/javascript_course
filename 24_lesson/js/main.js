//Higher Order Functions

// A higer order function is a function that does at least one
//of the following
// ** Takes one or more functions as an argument (parameter)
// ** Returs a function as the result

//forEach

import { posts } from "./post.js";

posts.forEach((post) => {
  console.log(post);
});

console.clear();

const filterPost = posts.filter((post) => {
  return post.userId == 1;
});

console.log(filterPost);

const mappedPost = filterPost.map((post) => {
  return post.id * 10;
});

console.log(mappedPost);

const reducePostValue = mappedPost.reduce((sum, post) => {
  return sum + post;
});

console.log(reducePostValue)
