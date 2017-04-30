/**
 * Created by MisterNT on 4/30/2017.
 */
import Validator from 'validatorjs';
import {User} from './../models/user.model'
import JWT from 'jsonwebtoken'
const env       = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];
const Register = function (req, res) {
  console.log(config.jwt_secret);

    User
        .findAndCountAll({
            where: {
                email: req.body.email
            }
        })
        .then(function (result) {
            if (result.count === 0) {

                const rules = {
                    email: 'required|email',
                    password: 'required',
                    firstname: 'required',
                    lastname: 'required',
                    tel: 'required|size:10',
                    gender: 'required',
                    birthday: 'required'

                };

                let validation = new Validator(req.body, rules);
                validation.passes(function () {
                    User.create({
                        email: req.body.email,
                        password: req.body.password,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        tel: req.body.tel,
                        gender: req.body.gender,
                        birthday: req.body.birthday
                    }).then(function (succcess) {

                        res.status(200).send({
                            success: true,
                            data: succcess,
                            token: JWT.sign({  email: req.body.email,
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                tel: req.body.tel,
                                gender: req.body.gender,
                                birthday: req.body.birthday
                            },config.jwt_secret , { expiresIn: '1' })
                        });

                    })
                });

                validation.fails(function () {
                    res.status(400).send(validation.errors);
                });

            } else {
                return res.status(400).send({
                    success: false,
                    code: "EMAIL_IS_ALREADY"
                });
            }

        });


}

export default Register