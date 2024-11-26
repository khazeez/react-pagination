import { DataTypes, Sequelize } from "sequelize"; // sequilize itu kek orm
import db from "../config/database.js";

const {dataType} = Sequelize;

const User = db.define('users', { // for create db
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async()=> {
    await db.sync()
})();