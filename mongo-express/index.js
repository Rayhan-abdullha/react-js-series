// write a boilerplate code for mongo-express
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./model/User');
const Blog = require('./model/Blog');

app.use(express.json());
app.use(cors());

app.get('/health', async(req, res) => {
   const user = await User.find({})
    res.status(201).json({message: "success", data: user});
});

app.get('/blogs', async (req, res) => {
    const blog = await Blog.find({}).populate({
        path: 'author',
        select: ['name', 'email']
    }).exec()
    res.status(201).json({ message: "success", data: blog });
});
app.post('/blogs', async (req, res) => {
    const user = await User.findById({
        _id: '67e908a8d3e75c4493852a58'
    })

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const blog = new Blog({
        title: req.body.title,
        author: user._id,
        description: req.body.description
    })

    await blog.save();
    res.status(201).json({ message: "success", data: blog });
});

app.listen(4000, () => {
   try {
        mongoose.connect('mongodb://localhost:27017/practice');
        console.log('Database connected'); 
   } catch (error) {
        console.log(error);
    }
    console.log('Server is running on port 4000');
});