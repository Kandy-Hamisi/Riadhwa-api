const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
            unique: false
        },
        schoolId: {
            type: Number,
            required: true,
            unique: true
        },
        studentClass: {
            type: String,
            required: true,
            unique: false
        },
        healthCondition: {
            type: String,
            required: true,
            unique: false
        },
        studentAge: {
            type: Number,
            required: true,
            unique: false
        },
        parentsId: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);


module.exports = mongoose.model('Students', studentSchema);