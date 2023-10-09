const express = require('express');
const router = express.Router();
const {createJobType, allJobType } = require('../controllers/jobTypeControllers');
const { isAuthenticated  } = require('../middleware/auth');


//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobType)


module.exports = router;