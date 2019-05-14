const connection = require('./connection');

//Helper function: Question Marks to for MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}
//Helper function: Converting object keys and values
function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(`${key}=${value} `);
        }
    } 
    return arr.toString();
}


const orm = {
    selectAll: function(table, callback) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (error, result) => {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function(table, column, value, callback) {
        var queryString = `INSERT INTO ${table}`;
        queryString +=  ` (${column.toString()}) VALUES (${printQuestionMarks(value.length)}) `
        console.log(queryString);

        connection.query(queryString, value, (error, result) => {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    updateOne: function (table, objColVals, condition, callback) {
        var queryString = `UPDATE ${table}`
        queryString += ` SET ${objToSql(objColVals)} WHERE ${condition}`;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};


module.exports = orm;
