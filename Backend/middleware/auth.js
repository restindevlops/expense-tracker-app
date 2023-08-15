const jwt = require('jsonwebtoken'); 

const User= require('../models/user');

exports.authenticate =(req,res,next) => { 

    try{
        const token=req.header('Authorization'); //extracting the token from the request headers
       console.log(token);
        const user = jwt.verify(token, 'thesecretkeyweassign');  //decryption of the generated token 
        User.findByPk(user.userId).then(user => {  //finding the user with the decrypted id 

            req.user = user; //req.user will be a global object for the controllers and is stored as the particular user object
            next(); // moving to next middleware
            
        }).catch(err => {throw new Error (err)})
    } catch(err){
        console.log(err);
        return res.status(500).json({error:err})
    }
}


