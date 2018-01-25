var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    idPost: String,
    idUser: String,
    datePost: Date,
    title: String,
    message: String
});

module.exports = mongoose.model('Post', PostSchema);