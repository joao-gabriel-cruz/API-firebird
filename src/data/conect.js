const Firebird = require('node-firebird');

const options = {
  host: 'localhost',
  port: 3050,
  database: 'C:\\Joao\\projeto-firebird\\BASEDADOS.FDB',
  user: 'SYSDBA',
  password: 'masterkey',
};

function Contect(sql) {
  return new Promise((resolve, reject) => {
    try {
      
        Firebird.attach(options, (err, db) => {
          if (err) {
            reject(err);
          }
          db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            db.detach();
            resolve(result);
          });
        })
     
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

module.exports = {
  Contect,
};
