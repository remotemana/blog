const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog);
Blog.belongsTo(User);
User.hasMany(Comment);

Blog.hasMany(Comment);
Comment.belongsTo(User);

module.exports = {
    User, 
    Blog,
    Comment
}