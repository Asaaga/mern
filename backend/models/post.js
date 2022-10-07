const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: false
    },
    img: {
        type: String,
        required: false
    }
},
{timestamps: true});

module.exports = mongoose.model('Post', postSchema)