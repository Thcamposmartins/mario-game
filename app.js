const express = require('express');

const app = express();

app.use(express.static(__dirname + '/src'));
app.get('/', function (req, res) {
   res.sendFile(__dirname + "/src/index.html");
});

app.listen(3333, () => { console.log("Servidor iniciado [: ") });