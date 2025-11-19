const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  res.send(JSON.stringify(friends,null,4)); 
  //Bu kod satırı friends objesini JSON formatında döndürüyor ve 4 boşlukla girintiliyor.
  //null parametresi, tüm özelliklerin dahil edileceğini belirtir. 

});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  const email = req.params.email;
  res.send(friends[email]);
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  if (friend) {  // Check if friend exists
        let DOB = req.body.DOB;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
      
        if (DOB) {
            friend["DOB"] = DOB;
        }
        if(firstName){
          friend["firstName"]=firstName;
        }
        if(lastName){
          friend["lastName"]=lastName;
        }
        
        friends[email] = friend;  
        res.send(`Friend with the email ${email} updated.`);
    } else {
        res.send("Unable to find friend!");
    }
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let friend = friends[email];

  if(friend) {
    friend.firstName = req.body.firstName;
    friend.lastName = req.body.lastName;
    friend.DOB = req.body.DOB;
  }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  if(friends[email]) {

  }
});

module.exports=router;
