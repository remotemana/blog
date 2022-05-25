const { response } = require('express');
const express = require('express');
const router = express.Router();
const {User,Blog, Comment} = require('../models');

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/home",(req,res)=>{
    Blog.findAll({include:[Comment]}).then(blogs=>{
        // console.log(blogs)
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        console.log("==========")
        // console.log(hbsBlogs)
        const loggedIn = req.session.user?true:false
        res.render("home",{blogs:hbsBlogs,loggedIn,username:req.session.user?.username})
    })
})



// =============================================comment route test number two===============================
router.get("/post/:id",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    Blog.findByPk(req.params.id).then(commentBlog=>{
       
        const comments = commentBlog.toJSON()
        const loggedIn = req.session.user?true:false
    res.render("comment",comments)    
        // res.render("comment",{comments:commentBlog,loggedIn, username:req.session.user?.username})
    })
})
// =============================================comment route test number one===============================
// router.get("/post/:id",(req,res)=>{
//     if(!req.session.user){
//         return res.redirect("/login")
//     }
//     Blog.findByPk(req.params.user,{include:[Comment]}).then(commentBlog=>{
//        console.log(commentBlog);
//         const comments = commentBlog.map(commentBlog=>commentBlog.get({plain:true}))
//         console.log("============================")
//         console.log(comments)
//         const loggedIn = req.session.user?true:false
//         res.render("comment",{blogs:commentBlog, loggedIn})
//     })
// })

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/login")
    }
    res.render("home")
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Blog]
    }).then(userData=>{
        const hbsData = userData.get({plain:true})
        hbsData.loggedIn = req.session.user?true:false
        res.render("dashboard",hbsData)
    })
})

module.exports = router;