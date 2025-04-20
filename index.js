const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Bot está online e pronto!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
