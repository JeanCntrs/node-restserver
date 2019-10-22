require('./config/config'); // Primer archivo ejecutado, al hacerlo configura todo lo que contenga
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//  analizar aplicación / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // app.use son middleware || funciones que se disparan cuando el código pasa por esta línea
 
//  analizar aplicación / json
app.use(bodyParser.json());
 
app.get('/user', function (req, res) {
  res.json('get User');
});

app.post('/user', function (req, res) {
  let body = req.body;
  
  if (body.name === undefined) {
    res.status(400).json({
      ok: false,
      message: 'El nombre es requerido.'
    });
  } else {
    res.json({
      person: body
    }); 
  }
});

app.put('/user/:id', function (req, res) { // :id es el parametro que quiero recibir
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/user', function (req, res) {
  res.json('delete User');
});
 
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});