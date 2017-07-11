/**
 * Created by MisterNT on 4/30/2017.
 */
import Validator from 'validatorjs';
import {User} from './../models/user.model'
import JWT from 'jsonwebtoken'
const env       = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];
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
             res.status(200).send({
             success: true,
             data: decoded.username
             });
                    break;
         case "add_address":
                    break;
         case "add_contact":
                    break;
         default:
                
        }     
     

      }
    });


}
export default Users