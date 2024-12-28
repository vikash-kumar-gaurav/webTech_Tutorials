import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import generateAccessToken from "../utils/generateaccesstoken.js";
//import jwt from 'jsonwebtoken'  //{for tokendata}

//make register page 
export const signupController =  async (req,res)=>{
    try {
        const { email, name, password } = req.body
        
        if(!email || !name || !password){
            return res.status(402).json({
                msg : "Please fill all details",
                success : false
            })
        };
    
        const validEmail = await User.findOne({email})
    
        if(validEmail){
            return res.status(402).json({
                msg : "User already register LogIN or register with another email",
                success : false
            }) 
        }
    
        const hasshedpassword = await bcrypt.hash(password,10)
    
        const user= new User({email,password:hasshedpassword,name})
        const user_data = await user.save()
    
        const accessToken = await generateAccessToken({name:user_data.name, _id:user_data._id, email:email})
         const cookieOptions={
            httpOnly : true,
            secure : true
        }
    
        res.cookie('accessToken',accessToken,cookieOptions)
    
        return res.status(200).json({
            msg : ` registration completed ${user_data.name}`,
            success : true
        })
    } catch (error) {
        console.log(`error from signupController ${error}`);
        res.status(500).json({
            msg : 'Server error please try later',
            success : false
        })
        
    }


}

//make login page controller
export const loginController = async (req,res)=>{
    try {
        const { email, password }  = req.body
        if(!email || !password){
            return res.status(402).json({
                msg : "fill all details",
                success : false
            }) 
        };
    
        const validEmail = await User.findOne({email})
    
        if(!validEmail){
            return res.status(402).json({
                msg : "No account found please register or give valid email",
                success : false
            })
        };
    
        const validpassword = bcrypt.compare(validEmail.password,password);
        if(!validpassword){
            return res.status(402).json({
                msg : "Wrong Password please try again",
                success : false
            })
        }
    
        const accessToken = await generateAccessToken({name:validEmail.name, _id:validEmail._id, email:email})
    
        const cookieOptions ={
            httpOnly : true,
            secure : true
        }
        res.cookie('accessToken',accessToken,cookieOptions)

        //const token_data = jwt.verify(accessToken,process.env.ACCESS_TOKEN_KEY)
    
        res.status(200).json({
            msg :  `logIn successfull ${validEmail.name}`,
            success : true
        })
    } catch (error) {
        console.log(`error from loginController ${error}`);
        res.status(500).json({
            msg : `server error please try later`,
            success : false
        })
        
    }
}