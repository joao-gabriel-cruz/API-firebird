const router = require('express').Router();

const pool = require('../data/conect');

const cadProduto = router;

cadProduto.get(`/`, (require, response) => {
  pool.get((err, db) => {
    if (err) {
      throw response.send(err);
    }
    db.query(`SELECT NOME, ID_PRODUTO FROM CADPRODUTO `, (err, result) => {
      if (err) {
        throw console.log(err);
      }
      response.send(result);
    });
  });
});

cadProduto.post('/', (require, response) => {
  const produto = require.body;
  pool.get((err, db) => {
    if (err) {
      throw console.log(err);
    }
    db.query(
      `INSERT INTO CADPRODUTO (ID_PRODUTO, NOME, DATA_CADASTRO, PRECO_VEND ) VALUES (
        '${produto.ID_PRODUTO}','${produto.NOME}','${produto.DATA_CADASTRO}','${produto.PRECO_VEND}'
        )`,
      (err, result) => {
        if (err) {
          response.status(404).send();
          throw console.log(err);
        }
        response.send(result);
        console.log('produto criadado ;)');
      }
    );
  });
});

cadProduto.get(`/:id`, (require, response) => {
  const id = require.params.id
  pool.get((err, db) => {
    if (err) {
      throw response.send(err);
    }
    db.query(`SELECT * FROM CADPRODUTO WHERE ID_PRODUTO = '${id}'`, (err, result) => {
      if (err) {
        throw console.log(err);
      }
      response.send(result);
    });
  });
});

cadProduto.put('/:id', (require, response) => {
  const produto = require.body;
  const id = require.params.id;
  pool.get((err, db) => {
    if (err) {
      throw console.log(err);
    }
    db.query(
      `
        UPDATE CADPRODUTO SET NOME = '${produto.NOME}',
        DATA_CADASTRO = '${produto.DATA_CADASTRO}',
        PRECO_VEND = '${produto.PRECO_VEND}' 
        WHERE ID_PRODUTO = '${id}'
        `,
      (err) => {
        if (err) {
          response.status(404).send();
          throw console.log(err);
        } else {
          response.status(204).send();
          console.log('produto atualizado :)');
        }
      }
    );
  });
});

cadProduto.delete('/:id', (require, response) => {
  const id = require.params.id;
  pool.get((err, db) => {
    if (err) {
      throw console.log(err);
    }
    db.query(`DELETE FROM CADPRODUTO WHERE ID_PRODUTO = '${id}'`, (err) => {
      if (err) {
        response.status(404).send();
        throw console.log(err);
      } else {
        console.log('produto deletado :_(');
        response.status(204).send();
      }
    });
  });
});

module.exports = cadProduto;
