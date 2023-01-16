const express = require('express');

const router = express.Router();

const api = require('./api');

router.get(`/`, api.listUsersGitHub);
router.get('/finduser/:login', api.findUsersGitHub);
router.get('/detail/:login', api.usersDetailsGitHub);
router.get('/repos/:login', api.usersReposGitHub);

module.exports = router;