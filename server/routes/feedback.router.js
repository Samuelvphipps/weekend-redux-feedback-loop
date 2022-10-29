const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);
})






module.exports = router;