
/**************************************
 * Express Setup
  *************************************/
const express = require('express');
const app = express();

/**************************************
 * Server!
  *************************************/

const PORT = 8080;
const HOST = '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  console.log('server online');
  console.log('listening to all interfaces');
});

/**************************************
 * Endpoint
  *************************************/

app.get('/', (request, response) => {
  response.send('Hello World!\n');  
});

app.get('/version', (request, response) => {
  response.send('1.0.0\n');
<<<<<<< HEAD
});
=======
  Array.forEach(request, (key) => {
    axios.get('myspecialserver/requestdistributor', (result) => {
      axios.get('database', (result) => {
        // all this stuff takes a really long time
      });
    });
  });
});

>>>>>>> dc86564847445c0066e67141084d258a76b7f719
