const DATABASE = require('node-firebird')

const options = {}

options.host = 'localhost';
options.port = 3050;
options.database = 'C:\\Joao\\projeto-firebird\\BASEDADOS.FDB';
options.user = 'SYSDBA';
options.password = 'masterkey'

const pool = DATABASE.pool(5,options)

module.exports = pool