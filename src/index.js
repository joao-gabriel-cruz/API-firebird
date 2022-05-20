const express = require('express');
const { cadProduto } = require('./router/router');

const app = express();
const port = 7777;

app.use(express.json());

app.listen(port, () => {
  console.log(`API rodando na porta ${port}...`);
});

app.use('/produtos', cadProduto);

app.get('/', (req, res) => res.send('hello'));
