const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create job
exports.createJob = async (req, res, next) => {
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
}

// single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('JobType', 'jobTypeName').populate('User', 'firstName lastName');
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

//show job
exports.showJobs = async (req, res, next) => {
    // enable search
    const keyword = req.query.keyword ? {
        tittle:{
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    //filter job by category ids
    // it is not working currently
    let ids = [];
    const jobTypeCategory = await JobType.find({},{_id:1})
    jobTypeCategory.forEach(cat => {
        ids.push(cat._id);
    })

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;

    //filter job by location
    let locations = [];
    const jobByLocation = await Job.find({},{location:1});
    jobByLocation.forEach(val =>{
        locations.push(val.location);
    });
    let setUniqueLocations = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocations;


     //enable pagination
     const pageSize = 5;
     const page = Number(req.query.pageNumber) || 1;
    //  const count = await Job.find({...keyword}).estimatedDocumentCount();
     const count = await Job.find({ ...keyword, jobType:categ, location:locationFilter}).countDocuments();
    try {
        const jobs = await Job.find({ ...keyword, jobType:categ, location:locationFilter}).sort({createdAt : -1}).skip(pageSize * (page-1)).limit(pageSize);
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil( count / pageSize),
            count,
            setUniqueLocations
        })
    } catch (error) {
        next(error);
    }
}


