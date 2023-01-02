// import express.js
const express = require("express");

// create express app
const app = express();

// define port
const port = 3000;

// server static files
app.use('/static', express.static("public"));

// define route
app.get("/", (req, res) => {
  res.send("you can take the flag! but I won't let google find it... where did i put it again...");
});

app.get("/robots.txt", (req, res) => {
  res.send("User-agent: Googlebot \n Disallow: /nogooglebot/");
});

app.get("/nogooglebot", (req,res) => {
  res.send("flag{you_found_it!}");
});

// listen for requests
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});