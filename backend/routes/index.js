const express = require('express');
const router = express();
const apiRouter = require('./api')
router.use('/api', apiRouter)
const { User } = require('../db/models')





router.get('/testing', async(req, res) => {
  const getInfo = await User.findAll()
  // const data = await getInfo.json()
   res.json(getInfo)
  // res.send("Hi from the backend")

});





if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      // return res.sendFile(
        res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')
      );
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      res.sendFile(
      // return res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')
      );
    });
  }

  if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      // return res.json({});
      res.status(201).json({})
    });
  }






module.exports = router;
