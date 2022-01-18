import express from 'express';
const app = express();
const port = 4000;
var cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
    res.json([
      {
        header: 'header placeholder',
        postText: 'post text placeholder',
        author: 'author placeholder',
        date: new Date
    },
    {
      header: 'header placeholder2',
      postText: 'post text placeholder2',
      author: 'author placeholder2',
      date: new Date
  }
    
    ])
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});