import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        lowercase : true
    },
    password : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    profile_pic : {
        type : String,
        default : ''
    },
    role : {
        type : String,
        enum : ["Student","Teacher","Admin"],
        default : "Student"
    },
    courseEnrolled : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'CourseEnrolled'
        }
    ]
    
},
{
    timestamps : true
})

const User = mongoose.model('User',userSchema);
export default User;