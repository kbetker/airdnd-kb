const express = require('express');
const apiRouter = require('./api')
const router = express();
router.use('/api', apiRouter)

router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.send('What is updog?')
});

router.get('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;
