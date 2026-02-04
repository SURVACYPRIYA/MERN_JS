import jwt from 'jsonwebtoken'

export function verifyToken(req,res,next){
    //token verfication logic
    
    //1. get token from req(using cookie-parser)
    let signedToken=req.cookies.token //{token :""}
    if(!signedToken){
        return res.status(401).json({message:"Please login first"})
    }
    //2. verify token(decode)
    let decodedToken=jwt.verify(signedToken,'abcdef')
    console.log("decoded token:",decodedToken)
    next()
}