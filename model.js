const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: [true, 'Roll field is required']
    },
    present: {
        type: Number,
        required: true
    }
})

const Student = mongoose.model('student', studentSchema)
module.exports = Student;