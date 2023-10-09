const express = require('express');
const router = express.Router();
const { isAuthenticated  } = require('../middleware/auth');
const createJob = require('../controllers/jobsControllers');


//job  routes

// /api/job/creates
router.post('/job/create', isAuthenticated, createJob)


module.exports = router;