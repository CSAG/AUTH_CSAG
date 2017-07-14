/**
 * Created by MisterNT on 4/30/2017.
 */
import Validator from 'validatorjs';
import {User} from './../models/user.model'
import JWT from 'jsonwebtoken'
const envd  = process.env.NODE_ENV || 'development';
const configd    = require('./../config/config.json')[env];
const config    = require('./../config/config.json')[configd.env];
const Users = function (req, res) {

    // verifies secret and checks exp
    JWT.verify(req.body.token, config.jwt_secret, function(err, decoded) {      
      if (err) {
            res.status(400).json({ success: false, message: 'Failed_to_authenticate_token' });    
      } else {

         switch(req.body.action) {
         case "forgetpass":
                    break;
         case "update":
                 
             if(req.body.firstname){
                 User.update( 
                { firstname: req.body.firstname } /* set attributes' value */, 
                { where: { username : decoded.username }} /* where criteria */).then(function(affectedRows) {})
            }
             if(req.body.lastname){
                 User.update( 
                { lastname: req.body.lastname } /* set attributes' value */, 
                { where: { username : decoded.username }} /* where criteria */).then(function(affectedRows) {})
            }
             if(req.body.gender){
                 User.update( 
                { gender: req.body.gender } /* set attributes' value */, 
                { where: { username : decoded.username }} /* where criteria */).then(function(affectedRows) {})
            }
             if(req.body.image){
                 User.update( 
                { image: req.body.image } /* set attributes' value */, 
                { where: { username : decoded.username }} /* where criteria */).then(function(affectedRows) {})
            }
             if(req.body.birthday){
                let rules = {
                   birthday: 'required|date'
                };

                let validation = new Validator(req.body, rules);
                validation.passes(function () {
                 User.update( 
                { birthday: req.body.birthday } /* set attributes' value */, 
                { where: { username : decoded.username }} /* where criteria */).then(function(affectedRows) {})
               })
               validation.fails(function () {
                    res.status(400).send(validation.errors);
                });       
              }
                User.findOne({ where: {username: decoded.username} }).then(function(User) {
                let arrays = User;
                delete arrays.dataValues.password;
                delete arrays.password;
                res.status(200).send({
                success: true,
                data: arrays
               });
             })
           
                    break;
         case "add_address":
                    break;
         case "add_contact":
                    break;
         case "newpass":
                    break;
         case "add_contact":
                    break;
         case "mail_confirm":
                    break;
         case "kmitl_confirm":
                    break;
         default:
                
        }     
     

      }
    });


}
export default Users