const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const toDoItems = [
  {
    id: 1,
    description: "Eat",
    id: 2,
    description: "Pray",
    id: 3,
    description: "Run",
    id: 4,
    description: "Dance",
    id: 5,
    description: "Skype"
  }
]

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

// get all todos
app.get('/api/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: toDoItems
  })
});

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
