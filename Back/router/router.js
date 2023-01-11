const express = require('express');

const router = express.Router();

const api = require('../api');

router.get('/FindUser/GitHub/:name', api.findUsersGitHub);
router.get('/ListUser/GitHub', api.listUsersGitHub);

module.exports = router;