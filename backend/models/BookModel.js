import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Book = db.define('book', {
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publication: DataTypes.STRING,
    stock: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default Book;

(async () => {
    await db.sync();
})();
