import mongoose from 'mongoose';

async function connectDB(){
    if(!process.env.MONGODB_URI){
        throw new Error(`mongoDB URI is empty`)
    }

    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`connection to mongoDB is successfull with host ${connectionInstance.connection.host} and name ${connectionInstance.connection.name}`);
        
    } catch (error) {
        console.log(`error from connectDB ${error}`);
        process.exit(1)
        
    }
}

export default connectDB