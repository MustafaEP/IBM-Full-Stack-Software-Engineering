const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const doesExist = (username)=>{
  let userswithsamename = users.filter((user) => {
    return user.username === username;
  });
  return userswithsamename.length > 0;
}


public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(username && password){
    if(!doesExist(username)){
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registered. Now you can login"});
    }
    else {
      return res.status(404).json({message: "User already exists!"});
    }
  }
});

// Get the book list available in the shop
// Uygun kitapları listeleme endpoint'i
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  let isbn = req.params.isbn;
  
  if(books[isbn]){
    return res.status(200).json(books[isbn]);
  }
  else {
    return res.status(404).json({message: "Book not found"});
  }

});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let author = (req.params.author);
  let results = Object.values(books).filter((book) => book.author === author);
  if(results.length > 0){
    return res.status(200).json(results, null, 4);
  }
  else {
    return res.status(404).json({message: "Author not found"});
  }

});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let title = (req.params.title);
  let results = Object.values(books).filter((book) => book.title === title);
  if(results.length > 0){
    return res.status(200).json(results, null, 4);
  }
  else {
    return res.status(404).json({message: "Title not found"});
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if(book){
    return res.status(200).json(book.reviews);
  }
  else {
    return res.status(404).json({message: "Book not found"});
  }
});

const axios = require('axios');

axios.get("http://localhost:5000/")
  .then((response) => {
    console.log("Book List: ", response.data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

axios.get("http://localhost:5000/isbn/1")
  .then((response) => {
    console.log("Book Details by ISBN: ", response.data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

axios.get("http://localhost:5000/author/Unknown")
  .then((response) => {
    console.log("Books by Author: ", response.data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

axios.get("http://localhost:5000/title/Pride and Prejudice")
  .then((response) => {
    console.log("Books by Title: ", response.data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

module.exports.general = public_users;
