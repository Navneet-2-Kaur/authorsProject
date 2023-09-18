const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [ true, "Author name is required."], 
        minlength: [ 3, "Must be 3 or more characters in length."]
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

