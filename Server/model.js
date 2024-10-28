const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Netflix')
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err))

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel;