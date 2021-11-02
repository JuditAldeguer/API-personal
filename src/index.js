//modules
const express = require('express');
const cors = require('cors');

//server
const app = express();
app.use(cors(), express.json({ limit: '10mb' }));
const serverPort = process.env.PORT || 4000;
app.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//static server
const staticServerPathWeb = './public';
app.use(express.static(staticServerPathWeb));

//endpoint
app.get('/CV', (req, res) => {
  res.download(__dirname + '/files/example.pdf', 'ejemplo.pdf');
});
