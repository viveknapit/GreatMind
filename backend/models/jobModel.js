const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema({
    tittle:{
        type: String,
        trim: true,
        required: [true, 'job tittle is required'],
        maxLength: 70,
    },
    batch:{
        type: String,
        trim: true,
        required: [true, 'batch year  is required else write graduate'],
        maxLength: 70,
    },
    location:{
        type: String,
        trim: true,
        required: [true, 'location is required'],
        maxLength: 70,
    },
    desc:{
        type: String,
        trim: true,
        required: [true, 'Discription is required'],
    },
    company:{
        type:String,
        trim:true,
        required: [true, 'Company name is required'],

    },
    jobType: {
        type: ObjectId,
        ref: "jobType",
        required: true
    }

}, {timestamps:true})

module.exports = mongoose.model("job", jobSchema);