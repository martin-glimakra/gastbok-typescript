import express from 'express';
const app = express();
const port = 4000;
var cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});