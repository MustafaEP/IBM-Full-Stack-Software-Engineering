const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(JSON.stringify({users}, null, 4))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  const email = req.params.email;

  let filtered_users = users.filter((user) => user.email === email);
  
  res.send(filtered_users);
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  users.push({
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "DOB": req.body.DOB,
  });

  res.send("User added successfully: " + req.query.firstName);
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);

  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];

    let DOB = req.body.DOB;
    if(DOB){
      filtered_user.DOB = DOB;
    }

    users = users.filter((user) => user.email !== email);
    users.push(filtered_user);

    res.send("User details updated successfully");
  } else {
    res.send("User not found");
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email !== email);
  res.send("User deleted successfully");
});

module.exports=router;
