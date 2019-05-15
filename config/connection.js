const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'central273',  
    database: 'burgers_db'
});

connection.connect((error) => {
    if (error) {
        console.log(`error connecting: ${error.stack}`);
    }
    console.log(`Connected as id ${connection.threadId}`);
});

//EXPORTING CONNECTION FOR ORM TO USE
module.exports = connection;