const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        max: 280,
    },
    createdAt: {
        type: Date,
        // GETTER METHOD FOR DATE
    },
    username: {
        type: String,
        required: true,
    },
    // reactions: {
    //     type: String,
    // }
},
{ timestamps: true }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;