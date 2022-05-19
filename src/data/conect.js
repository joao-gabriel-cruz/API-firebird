const DATABASE = require('node-firebird')

const options = {}

options.host = 'localhost';
options.port = 3050;
options.database = 'BASEDADOS.FDB';
options.user = 'SYSDBA';
options.password = 'masterkey'

const pool = DATABASE.pool(5)

module.exports = pool