const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true,
        minlength : 10
    }
})

reviewSchema.set('toJSON', {
    transform: (document, returnedDocument) => {
        returnedDocument.id = document._id.toString()
        delete returnedDocument._id
    }
})

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    // Embedding
    reviews: [reviewSchema]
}, {timestamps: true})
// timestamps store time to server

bookSchema.set('toJSON', {
    transform: (document, returnedDocument) => {
        returnedDocument.id = document._id.toString()
        delete returnedDocument._id
        delete returnedDocument.__V
    }
})

module.exports = mongoose.model('Book', bookSchema)