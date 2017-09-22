var mongoose = require('mongoose');
mongoose.connect('mongodb://sepehr:sepehr123@ds141524.mlab.com:41524/sepehr');

var Schema = mongoose.Schema
var postSchema=new mongoose.Schema({
    id:String,
    title:String,
    Context:String,
    owner:{
        type:Schema.ObjectId,
        ref:"user"
    },
    comment:{
        type:Schema.ObjectId,
        ref:"comment"

    }
});
mongoose.model("post",postSchema);
module.exports=mongoose.model("post");