const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Authors: {
            type: Map,
            of: String,
            required: false
        },
        Year_Of_Publication: {
            type: Date,
            required: false
        },
        ISBN: {
            type: Number,
            required: false
        },
        Number_Of_Copies: {
            type: Number,
            required: true
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Book);
