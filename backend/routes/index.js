const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.send('What is updog?')
});

module.exports = router;
