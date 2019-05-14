const orm = require('../config/orm');

const burger = {
    selectAll: function(callback) {
        orm.selectAll('burgers', (response) => {
            callback(response);
        });
    },
    insertOne: function(column, value, callback) {
        orm.insertOne('burgers', column, value, (response) => {
            callback(response);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne('burgers', objColVals, condition, (response) => {
            callback(response);
        });
    }
};

module.exports = burger;

