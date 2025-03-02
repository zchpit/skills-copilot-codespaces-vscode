// Create web server with express module
// Create comments.js file with comments array
// Create get request for /comments route
// Send comments array in response
// Listen to port 3000
// Create post request for /comments route
// Read the data from request body
// Push the data into comments array
// Send the updated comments array in response
// Test the code with postman

const express = require('express');
const app = express();

app.use(express.json());

const comments = [
  { message: 'Hello' },
  { message: 'Hi' },
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.send(comments);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});