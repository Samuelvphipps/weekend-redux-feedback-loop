const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.post('/', (req, res) => {
    //assign newFeedBack the payload
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);
    //assign sql text and params
    let queryText = `
        INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `
    let queryParams=[
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
    ]
    //pool.query info to DB and return 201 or 500

    pool.query(queryText, queryParams)
        .then(result=>{
            res.sendStatus(201);
        })
        .catch(err=>{
            console.log('error adding newfeedback', err);
            res.sendStatus(500)
        });
});






module.exports = router;