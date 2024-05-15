const express=require('express');
const authenticateUser=require('../config/validationJwt')
const { currentUser } = require('../controllers/useController');
const { loginUser,registerUser } = require('../controllers/useController');

const router= express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser)
router.get('/current',authenticateUser,currentUser)

module.exports = router;