// var post = require('./post/post.js');
// var db = require("./db.js");
var bodyParser = require('body-parser');
var express = require('express');
var user=require('./user/User.js')
var postrouter =express.Router();
postrouter.use(bodyParser.urlencoded({ extended: false }));
var post = require('./post')
//create new comment
postrouter.post('/', function (req, res) {
    user.find({email:req.body.email}, function (err, user) {
        
    })
    console.log(req.body)
    post.create({
        title: req.body.title,
        Context: req.body.Context,
        comment:req.body.comment
    },
        function (err, post) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(post);
        });

})
postrouter.get('/', function (req, res) {
    post.find({}, function (err, posts) {
        if (err) return res.status(500).send("There was a problem finding the post.");
        res.status(200).send(posts);
    });
});
module.exports=postrouter;