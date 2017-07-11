import Validator from 'validatorjs';
import {User} from './../models/user.model'
import JWT from 'jsonwebtoken'
const env       = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];
const Users = function (req, res) {

    // verifies secret and checks exp
    jwt.verify(req.body.token, config.jwt_secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
            res.status(200).send({
            success: true,
            data: decoded
        });

      }
    });


}
export default Users