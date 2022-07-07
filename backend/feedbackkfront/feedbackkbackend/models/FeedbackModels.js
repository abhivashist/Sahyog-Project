const mongoose = require('mongoose');
const jwt= require('jsonwebtoken');
const { response } = require('express');

const feedBackTemplate = new mongoose.Schema({
    
    firstname: String,
    lastname: String,
    dob: Date ,
    email : String,
    number: Number,
    objective:String,
    service:String,
    specification:String,
    experience:String,
    location:String,
    pswrd:String,
    cpswrd:String,
    date:{
        type:Date,
        default:Date.now
     }
})


module.exports = mongoose.model('mytable',feedBackTemplate)