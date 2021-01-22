const mysql = require('mysql');
const mysqlconection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '1007703318@L',
    database: 'restandres',

})
mysqlconection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("conexion con exito ");
    }

});

module.exports = mysqlconection;