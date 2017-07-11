/**
 * Created by MisterNT on 5/1/2017.
 */
import Validator from 'validatorjs';
import {User} from './../models/user.model'
import JWT from 'jsonwebtoken'
const env       = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];
const Login = function (req, res) {
    User.findOne({ where: {username: req.body.username , password : req.body.password} }).then(function(User) {
        let arrays = User;

            res.status(200).send({
            success: true,
            data: arrays,
            token: JWT.sign({  username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                image: req.body.image,
                gender: req.body.gender,
                birthday: req.body.birthday
            },config.jwt_secret , { expiresIn: '1' })
        });
    })
}
export default Login