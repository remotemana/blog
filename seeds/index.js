const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"lucas",
        password:"password"
    },
    {
        username:"lucass",
        password:"password1"
    },
    {
        username:"lucasss",
        password:"Password1"
    }
]

const blogs = [
    {
        title:"my first blog",
        body:"Welcome to my blog, I guess.",
        UserId:1
    },
    {
        title:"A day in the life of  a mad scientist.",
        body:"I cant do this anymore, science every day is too hard.",
        UserId:1
    },
    {
        title:"Interdimensional Televsion Ratings",
        body:" rick and moooooooooooooooooooooooooooorty",
        UserId:2
    }
]

const createBlogs = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

createBlogs()