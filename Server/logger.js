const logger =(req,res,next) => {
    console.log(req.method, req.originalUrl);
    next() //need to pass onto next
}

module.exports = logger