import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 1000,
        required: true
    },
    image: {
        type: String
    },
    content: {
        type: String,
        trim: true,
        maxLength: 500,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }

}, { timestamps: true});

module.exports = mongoose.model("Category", categorySchema);