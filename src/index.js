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
app.get('/cv', (req, res) => {
  res.sendFile(__dirname + '/files/cv.pdf');
});

app.get('/cv_eng', (req, res) => {
  res.sendFile(__dirname + '/files/cv_ENG.pdf');
});

//   res.download(
//     __dirname + '/files/cv.pdf',
//     'CV - Junior Frontend - Judit_Aldeguer_Vicens.pdf'
//   );
