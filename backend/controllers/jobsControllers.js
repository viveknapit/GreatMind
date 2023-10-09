const Job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');

// create job
exports.createJob = async(req, res, next) =>{
    try {
        const job = await Job.create({
            tittle: req.body.tittle,
            batch: req.body.batch,
            location: req.body.location,
            desc: req.body.desc,
            company: req.body.company,
            jobType: req.body.jobType,
        });
        res.status(201).json({
            success:true,
            job
        })
    } catch (error) {
        next(error);
    }
}

