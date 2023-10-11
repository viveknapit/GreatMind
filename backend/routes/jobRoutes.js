const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin  } = require('../middleware/auth');
const Job = require('../models/jobModel');
const { singleJob, updateJob, showJobs } = require('../controllers/jobsControllers');

//job  routes
// /api/job/creates
router.post('/job/create', isAuthenticated, isAdmin, async (req, res, next) =>{
    try {
        const job = await Job.create({
            tittle: req.body.tittle,
            location: req.body.location,
            batch: req.body.batch,
            location: req.body.location,
            desc: req.body.desc,
            company: req.body.company,
            jobType: req.body.jobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
});

// /api/job/id
router.get('/job/:id', singleJob);
// /api/job/update/:job_id
router.put('/job/update/:job_id',isAuthenticated, updateJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);

module.exports = router;