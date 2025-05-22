import { Sequelize } from "sequelize";

// import (Sequelize)
const db = new Sequelize('library','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;