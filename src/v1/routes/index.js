'use strict';

const express = require('express');
const router = express.Router();

router.use('/api/v1/working', (req,res) => {
    res.status(200).json({message: 'it works!'});
});

module.exports = router;