const express = require("express");
const app = express();

// User Story 2: homepage
app.get("/", (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// User Story 3: hobbies
app.get("/hobbies", (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

// User Story 4: skills
app.get("/skills", (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// User Story 5: profile data as JSON
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"],
  });
});

// User Story 1: start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});