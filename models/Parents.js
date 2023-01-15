const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema(
    {
        parentName: {
            type: String,
            required: true,
            unique: false
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        nationalID: {
            type: Number,
            required: true,
            unique: true
        }
    }
);

module.exports = mongoose.model('Parents', parentSchema);