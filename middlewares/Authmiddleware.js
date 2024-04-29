const Isauth=(req,res,next)=>{
    if(req.session.isAuth){
        next()
    }
    else{
        return res.send({
            statu:401,
            message:"session expired,please login!"
        })
    }
}
module.exports={Isauth};