import Token from "./token.model.js";
import User from "./user.model.js";

User.hasMany(Token, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Token.belongsTo(User, {
    foreignKey: 'userId'
});

export { User, Token };