const blogs = require("../data/blog.js")

//fetch all data
const sendBlog = (req, res) => {
    try{
        res.status(200).json({
            success: true,
            body: blogs,
            message: "Blogs fetched successfully"
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message:"Something went wrong",
            error: err.message
        })
    }
}

//fetch single data
const sendBlogById = (req, res) => {
    try{
        const id = req.params.id;

        const blog = blogs.find(b => b.id === id);

        if(!blog){
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        res.status(200).json({
            success: true,
            body: blog,
            message: "Blog fetched successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}

//create
const createBlog = (req, res) => {
    try{
        let newBlog = {
            id: Date.now().toString(),
            userId: req.body.userId,
            title: req.body.title,
           content: req.body.content,
        }

        blogs.push(newBlog)

        res.status(201).json({
            success: true,
            body: newBlog,
            message: "Blog created successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Somthing went wrong",
            error: err.message
        })
    }
}

//update
const updateBlog = (req, res) => {
    try{
        let blog = blogs.find(blog => blog.id == req.params.id);

        if(!blog){
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        blog.userId = req.body.userId;
        blog.title = req.body.title;
        blog.content = req.body.content;

        res.status(200).json({
            success: true,
            body: blog,
            message: "Blog updated successfully",
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}

//delete
const deleteBlog =(req, res) => {
    try{
        let deleteId = req.params.id
        let getIndex = blogs.findIndex(blog => blog.id == deleteId)

        if(!getIndex === -1){
            return res.status(404).json({
                success: false,
                message: "blog not found",
            })
        }
      let deletedBlog = blogs.splice(getIndex, 1);

        res.status(200).json({
            success: true,
            body: deletedBlog[0],
            message: `Blog deleted ${deleteId} successfully`,
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}

module.exports = {
    sendBlog,
    sendBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
}