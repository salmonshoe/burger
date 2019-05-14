const express = require('express');
const router = express.Router();
const burger = require('../models/burgers');

router.get('/', (request, response) => {
    burger.selectAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        response.render('index', hbsObj);
    });
});

router.post('/api/burgers', (request, response) => {
    burger.insertOne(['burger_name', 'devoured'], [request.body.burger_name, request.body.devoured], (result) => {
        response.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (request, response) => {
    let condition = `id = ${request.params.id}`;
    console.log(`Condition is ${condition}`);

    burger.updateOne(
        {
            devoured: request.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return response.status(404).end();
            }
            response.status(200).end();
        }
    );
});

module.exports = router;