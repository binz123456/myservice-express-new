const express = require("express")
const router = express.Router();
const model = require("../model")

router.get("/:id" , (req , res, next) => {

    model.bicycle.read(req.params.id , ( err, result) => {
        if(err) {
            //when the error is 404 next function in app.js is called
            //app.use(function(req, res, next) {
            //   next(createError(404));
            // });





            if(err.message === 'not found') next();
            else next(err);
        }else {
            //res.send passes a object and automatically sets the header of response as JSON
            //we return the response in JSON formatn
            res.send(result);
        }
    });

});

module.exports = router 