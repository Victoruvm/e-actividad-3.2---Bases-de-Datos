const mysql = require('mysql');

const connection= mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'almacen'
});

connection.connect((error) => {
if (error) {
    console.log('Error: ' + error);
} else {
console.log('Base de datos esta conectada')
}
});

module.exports = connection;