import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/connectDB.js';
import userRouter from './src/routes/index.js'
import cors from 'cors'
dotenv.config();
const PORT = process.env.PORT || 8080
const app = express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true,
}))

app.get('/',(req,res)=>{
    res.send('<h1>hello ji🤖</h1>')
})
app.use('/api/v1',userRouter)

connectDB()
.then(() => {
    app.listen(PORT,()=>{
        console.log(`app is listining on the port no ${PORT}`);
        
    })
})