//post_controller.js
const Post = require('../model/post_model.js');//include post schema
const mongoos = require('mongoose');

exports.showIndex = async (req, res, next) => {
    console.log("read")
   const {params} = req
   const {id} = params
    const result = await Post.findOne({_id: id})
   console.log(result)
    res.send(result);
}

exports.postIndex = async (req, res, next) => {
    // res.send('ruunning node api post index reva');
    console.log("create");
    const postreq = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
   }
    const post = await Post(postreq)
    res.send(post)
   
}

exports.putIndex = async (req, res, next) => {
    const { body, params } = req
    const { id } = params
    console.log("Update");
    const putreq = {
        title: body.title,
        description: body.description,
        image: body.image
   }
    const putData = await Post.updateOne({ _id: id }, { $set: putreq }, { multi: true })
    res.send(putData)
}

exports.deleteIndex = async (req, res, next) => {
    console.log("delete")
   const {params} = req
   const {id} = params
    const result = await Post.deleteOne({_id: id})
   console.log(result)
    res.send(result);
}