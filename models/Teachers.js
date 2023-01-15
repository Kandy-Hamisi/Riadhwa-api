const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
    {
        teacherName: {
            type: String,
            required: true,
            unique: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        nationalId: {
            type: Number,
            required: true,
            unique: true,
        },
        subjects: {
            type: Array
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Teachers', teacherSchema);