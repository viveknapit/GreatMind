const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxLength: 32,
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxLength: 32,
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'E-mail is required'],
        unique: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'please fill a valid email address'
        ]
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minLength:[8, 'password must be atleast 8 charectors'],
    },
    role:{
        type: Number,
        default:0
    }

}, {timestamps:true})

// encypting password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


//return a JWT token
userSchema.methods.getJwtToken = function (){
    return jwt.sign({id:this.id}, process.env.JWT_SECRET, {
        expiresIn:3600
    });
}

module.exports = mongoose.model("user", userSchema);