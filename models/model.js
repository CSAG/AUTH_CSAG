import {Sequelize as Seq} from "sequelize";

const env       = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];

const Model = new Seq(config.database, config.username, config.password, config);



export default Model
export const Sequelize = Seq;
