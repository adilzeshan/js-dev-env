import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/books', function (request, response) {
  // Hard coding for simplicity. Pretend this hits a real database.
  response.json(
    [
      {
        "id": 1,
        "author": "Lord Dunsany",
        "book": "The King of Elfland's Daughter",
        "genre": "fantasy"
      },
      {
        "id": 2,
        "author": "JRR Tolkien",
        "book": "The Lord of the Rings",
        "genre": "fantasy"
      },
      {
        "id": 3,
        "author": "Lynn Flewelling",
        "book": "The Bone Doll's Twin",
        "genre": "fantasy"
      }
    ]
  );
});

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
