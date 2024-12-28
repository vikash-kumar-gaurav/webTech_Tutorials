import jwt from 'jsonwebtoken'
async function generateAccessToken({name:name, _id:_id, email:email}){
    const token = jwt.sign({email:email,_id:_id, name:name},process.env.ACCESS_TOKEN_KEY,{expiresIn:'1h'})
    return token
}

export default generateAccessToken