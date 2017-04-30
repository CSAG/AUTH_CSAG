import express from 'express'
const router = express.Router();

import Main from './controllers/index'
import Register from './controllers/register.controller'
import Login from  './controllers/login.controller'
/* GET home page. */
router.get('/', Main);
router.post('/register', Register);
router.post('/login', Login);

module.exports = router;