const mysql = require ('mysql2');
require ('dotenv').config();

const pool = mysql.createPool( {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 10,

});


// let sql = "SELECT * FROM carts;";

// pool.execute(sql , function (err, result){
//     if (err) throw err;

//     console.log(result);
// })


pool.getConnection((err, connection) => {
    if(err) {
        console.error (' MySQL connection error:' , err);
    }else {
        console.log('Connected to MySQL (raw) ');
        connection.release();
    }
});

module.exports = pool.promise(); // to use with async/await