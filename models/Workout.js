const { model, Schema } = require('mongoose')

const Workout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: false
        },
        sets: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        },
        duration: {
            type: Number,
            required: true
        },
        distance: {
            type: Number,
            required: false
        }
    }]
}, { timestamps: true })

module.exports = model('Workout', Workout)