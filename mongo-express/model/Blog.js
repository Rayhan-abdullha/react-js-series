const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Blog', blogSchema);