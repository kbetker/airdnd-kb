const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken())
        res.send('What is updog?')
    });

router.post('/test', function(req, res) {
        res.json({ requestBody: req.body });
        });


module.exports = router;









// // Token test
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'FakeUser1'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));
// // restore user test
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
// '/restore-user',
// restoreUser,
// (req, res) => {
//   return res.json(req.user);
// }
// );
// // require auth test
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
// '/require-auth',
// requireAuth,
// (req, res) => {
//   return res.json(req.user);
// }
// );
