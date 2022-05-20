const router = require('express').Router();

const { options, Contect } = require('../data/conect');

const cadProduto = router;

cadProduto.get(`/`, (require, response) => {
  var result = Contect(`SELECT NOME, ID_PRODUTO FROM CADPRODUTO`);
  result
    .then((result) => response.send(result))
    .catch((err) => response.status(404).send(err));
});

cadProduto.post(`/`, (require, response) => {
  const produto = require.body;
  const result = Contect(
    `INSERT INTO CADPRODUTO (ID_PRODUTO, NOME, DATA_CADASTRO, PRECO_VEND ) VALUES (
    '${produto.ID_PRODUTO}','${produto.NOME}','${produto.DATA_CADASTRO}','${produto.PRECO_VEND}'
    )`
  );

  result
    .then((result) => response.send(result))
    .catch((err) => response.status(404).send(err));
});

cadProduto.get(`/:id`, (require, response) => {
  const id = require.params.id;
  var result = Contect(
    `SELECT NOME, ID_PRODUTO FROM CADPRODUTO WHERE ID_PRODUTO = '${id}'`
  );
  result
    .then((result) => response.send(result))
    .catch((err) => console.log(err));
});

cadProduto.put('/:id', (require, response) => {
  const produto = require.body;
  const id = require.params.id;

  const result = Contect(
    ` UPDATE CADPRODUTO SET NOME = '${produto.NOME}',
        DATA_CADASTRO = '${produto.DATA_CADASTRO}',
        PRECO_VEND = '${produto.PRECO_VEND}' 
        WHERE ID_PRODUTO = '${id}'
        `
  );
  result
    .then(response.status(204).send())
    .catch((err) => response.status(404).send(err));
});

cadProduto.delete('/:id', (require, response) => {
  const id = require.params.id;
  const result = Contect(`DELETE FROM CADPRODUTO WHERE ID_PRODUTO = '${id}'`);

  result.then(response.status(204).send()).catch(response.status(404).send());
});

module.exports = cadProduto;
