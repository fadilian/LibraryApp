import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Book from "./BookModel.js";

const Borrowing = db.define('borrowing', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    bookId: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'id'
        }
    },
    borrowFor: DataTypes.STRING,
    status: {
        type: DataTypes.STRING,
        defaultValue: 'borrowed'
    }
}, {
    freezeTableName: true
});

User.hasMany(Borrowing, { foreignKey: 'userId' });
Book.hasMany(Borrowing, { foreignKey: 'bookId' });
Borrowing.belongsTo(User, { foreignKey: 'userId' });
Borrowing.belongsTo(Book, { foreignKey: 'bookId' });

export default Borrowing;

(async () => {
    await db.sync();
})();
