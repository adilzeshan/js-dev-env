import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../src/index.html'));
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
