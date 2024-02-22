const express = require('express');
const router = express.Router();
const Student = require('./model');

router.get('/students', (req, res) => {
    res.setTimeout(3000, () => res.status(500).send({ status: res.statusCode, message: 'timeout' }));
    Student.find({}).then(students => {
        if (students.length >= 0) {
            res.send(students);
        } else {
            res.send({ status: 400, message: 'No data found!' })
        }
    }).catch(err => {
        res.send({ status: res.statusCode, message: err.message })
    });
});

router.post('/students', (req, res, next) => {
    Student.create(req.body).then(student => {
        res.send(student);
    }).catch(err => next(err));
});

router.put('/students/:id', (req, res) => {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body).then(student => {
        Student.findOne({ _id: req.params.id }).then((student) => {
            res.send(student);
        });
    });
});

router.delete('/students/:id', (req, res, next) => {
    Student.findOneAndDelete({ _id: req.params.id }).then(student => {
        res.send(student);
    }).catch(err => next(err));
});

module.exports = router;