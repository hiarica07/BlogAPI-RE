"use-strict"
//Model
const {BlogCategory,BlogPost} = require("../models/blog")

//Controller
module.exports.blogCategory = {
    list: async (req,res) => {
        const result = await BlogCategory.find()
        res.status(200).send({
            error:false,
            result
        })
    },
    create: async (req,res) => {
        const result = await BlogCategory.create(req.body)
        res.status(201).send({
            error:false,
            result
        })
    },
    read: async (req,res) => {
        // console.log(req.params);
        const result = await BlogCategory.findById(req.params.categoryId)
        res.status(201).send({
            error:false,
            result
        })
    },
    update: async (req,res) => {
        // console.log(req.params);
        // console.log(req.body);

        const result = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body, {new:true})
        res.status(202).send({
            error:false,
            result
        })
    },
    delete: async (req,res) => {
        // console.log(req.params);
        const {deletedCount} = await BlogCategory.deleteOne({_id:req.params.categoryId})
        if(deletedCount) res.sendStatus(204)
            else throw new Error("Something went wrong!")        
        // res.status(200).send({
        //     error:false,
        //     result
        // })
    },
}


module.exports.blogPost = {
    list: async (req,res) => {

        /* ------------------------------------------------------- */

        // FILTERING &  SEARCHING & SORTING & PAGINATION

         // SELECT & POPULATE:
        // const result = await BlogPost.find({...search-filter},{...select})
        // const result = await BlogPost.find({}, { categoryId: true, title: true, content: true, _id: false })

        const filter = req.query?.filter || {}

        const result = await BlogPost.find({...filter})
        // .populate('categoryId') // default --> _id : true

        console.log(req.query);

        res.status(200).send({
            error:false,
            result
        })
    },
    create: async (req,res) => {
        const result = await BlogPost.create(req.body)
        res.status(201).send({
            error:false,
            result
        })
    },
    read: async (req,res) => {
        // console.log(req.params);
        const result = await BlogPost.findById(req.params.postId)
        res.status(201).send({
            error:false,
            result
        })
    },
    update: async (req,res) => {
        // console.log(req.params);
        // console.log(req.body);

        const result = await BlogPost.findByIdAndUpdate(req.params.postId, req.body, {new:true})
        res.status(202).send({
            error:false,
            result
        })
    },
    delete: async (req,res) => {
        // console.log(req.params);
        const {deletedCount} = await BlogPost.deleteOne({_id:req.params.postId})
        if(deletedCount) res.sendStatus(204)
            else throw new Error("Something went wrong!")        
        // res.status(200).send({
        //     error:false,
        //     result
        // })
    },
}


