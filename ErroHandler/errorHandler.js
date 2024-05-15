
const {constants}=require('../ErroHandler/constants')

const errorHandler=(err,req,res,next)=>{
    const statuscode=res.status?res.status:500;

    switch(statuscode){
        case constants.FORBIDDEN:
            res.json({
                title:"FORBIDDEN",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"NOT_FOUND",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"SERVER_ERROR",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"VALIDATION_ERROR",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"UNAUTHORIZED",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        default:
            console.log("all good no errors")
            break;
    }
    
}
module.exports={errorHandler}