const express = require('express');
const dotenv = require('dotenv'); 
dotenv.config();  

const app = express();
 
app.get('/', (req, res) => {
  res.send("What's up doc?");
});
 
app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
