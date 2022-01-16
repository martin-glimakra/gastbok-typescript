import express from 'express';
const app = express();
const port = 4000;
var cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
    res.json([{
      rubrik: 'rubrik placeholder',
      postText: 'post text placeholder',
      author: 'author placeholder',
      date: new Date
  }])
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});